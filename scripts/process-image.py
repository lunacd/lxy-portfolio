import os
import subprocess
import colorama
import shutil
from PIL import Image
Image.MAX_IMAGE_PIXELS = 1000000000 

err_count = 0

def cmd_exists(cmd):
    return shutil.which(cmd) is not None

if cmd_exists("magick"):
    cmd = "magick"
else:
    cmd = "convert"

for dirPath, dirNames, filenames in os.walk("./images"):
    for name in filenames:
        print(colorama.Fore.RESET + "Processing " + os.path.join(dirPath, name))
        basename, ext = os.path.splitext(name)

        # Check extension
        if ext.lower() in [".gif"]:
            continue
        if ext.lower() not in [".png", ".jpg", ".webp"]:
            print(colorama.Fore.RED + "Image of type " +
                  ext + " is not supported")
            err_count += 1
            continue

        if basename.endswith("6x"):
            target_width = 1920 * 6
        elif basename.endswith("4x"):
            target_width = 1920 * 4
        elif basename.endswith("2x"):
            target_width = 1920 * 2
        elif basename.endswith("full"):
            target_width = 1920
        elif basename.endswith("big"):
            target_width = 1280
        elif basename.endswith("half"):
            target_width = 960
        elif basename.endswith("small"):
            target_width = 640
        elif basename.endswith("icon"):
            target_width = 128
        else:
            print(colorama.Fore.RED + "Unknown width: " + name)
            err_count += 1
            continue

        src = os.path.join(dirPath, name)
        dest = os.path.join(dirPath, basename + ".webp")

        im = Image.open(src)
        w, h = im.size
        if w <= target_width and ext in [".webp"]:
            continue

        subprocess.call([
            cmd,
            src,
            "-strip",
            "-interlace",
            "Plane",
            "-quality",
            "95",
            "-resize",
            str(target_width),
            "-define",
            "webp:lossless=true",
            dest
        ])
        print(colorama.Fore.GREEN + "===>" +
              colorama.Fore.RESET + " Successfully generated " + dest)

if err_count == 0:
    print("Completed successfully.")
else:
    print("Conversion finished with " + str(err_count) + " errors.")
