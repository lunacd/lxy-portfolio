import os
import subprocess
import colorama
import shutil
import sys
from PIL import Image

Image.MAX_IMAGE_PIXELS = 1000000000

err_count = 0


def cmd_exists(command):
    return shutil.which(command) is not None


if cmd_exists("magick"):
    cmd = "magick"
else:
    cmd = "convert"

if len(sys.argv) < 3:
    print("./process-image [images...] [target width]")

files = sys.argv[1:-1]
target_width = int(sys.argv[-1])

for file in files:
    print(colorama.Fore.RESET + "Processing " + file)
    basename, ext = os.path.splitext(os.path.basename(file))

    # Check extension
    if ext.lower() in [".gif"]:
        continue
    if ext.lower() not in [".png", ".jpg", ".webp"]:
        print(colorama.Fore.RED + "Image of type " + ext + " is not supported")
        err_count += 1
        continue

    dir_path = os.path.dirname(file)
    dest = os.path.join(dir_path, basename + ".webp")

    im = Image.open(file)
    w, h = im.size
    if w <= target_width and ext in [".webp"]:
        continue

    if w <= target_width:
        resize = False
    else:
        resize = True

    full_command = (
        [cmd, file, "-strip", "-interlace", "Plane", "-quality", "95"]
        + (["-resize", str(target_width)] if resize else [])
        + ["-define", "webp:lossless=true", dest]
    )
    print(full_command)

    subprocess.call(full_command)
    print(
        colorama.Fore.GREEN
        + "===>"
        + colorama.Fore.RESET
        + " Successfully generated "
        + dest
    )

if err_count == 0:
    print("Completed successfully.")
else:
    print("Conversion finished with " + str(err_count) + " errors.")
