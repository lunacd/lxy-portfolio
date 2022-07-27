import os
import subprocess
import colorama
from PIL import Image

err_count = 0

for dirpath, dirnames, filenames in os.walk("./images"):
    for name in filenames:
        print(colorama.Fore.RESET + "Processing " + os.path.join(dirpath, name))
        basename, ext = os.path.splitext(name)

        # Check extension
        if ext.lower() not in [".png", ".jpg"]:
            print(colorama.Fore.RED + "Image of type " +
                  ext + " is not supported")
            err_count += 1
            continue

        src = os.path.join(dirpath, name)

        im = Image.open(src)
        w, h = im.size
        if w <= 1920:
            continue

        subprocess.call([
            "magick",
            src,
            "-strip",
            "-interlace",
            "Plane",
            "-quality",
            "85",
            "-resize",
            '1920',
            src
        ])
        print(colorama.Fore.GREEN + "===>" +
              colorama.Fore.RESET + " Successfully outputed " + src)

if err_count == 0:
    print("Completed successfully.")
else:
    print("Conversion finished with " + str(err_count) + " errors.")
