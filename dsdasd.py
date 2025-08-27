# import os
# from PIL import Image

# folder = "public/image"

# # Allowed extensions
# image_exts = {".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"}

# # Get files
# files = [f for f in os.listdir(folder) if os.path.isfile(os.path.join(folder, f))]
# images = [f for f in files if os.path.splitext(f)[1].lower() in image_exts]
# images.sort()

# # Temporary renaming (avoid conflicts)
# temp_names = []
# for idx, filename in enumerate(images, start=1):
#     ext = os.path.splitext(filename)[1].lower()
#     temp_name = f"tmp_{idx}{ext}"
#     os.rename(os.path.join(folder, filename), os.path.join(folder, temp_name))
#     temp_names.append(temp_name)

# # Process + final renaming
# for idx, filename in enumerate(temp_names, start=1):
#     ext = os.path.splitext(filename)[1].lower()
#     old_path = os.path.join(folder, filename)
#     new_name = f"{idx}.jpg"  # Save everything as JPG
#     new_path = os.path.join(folder, new_name)

#     try:
#         img = Image.open(old_path)

#         # Resize if too large
#         max_size = (1920, 1080)  # Change if you want smaller/larger
#         img.thumbnail(max_size)

#         # Save compressed JPG
#         img.save(new_path, "JPEG", quality=85, optimize=True)

#         os.remove(old_path)  # remove tmp file after processing

#     except Exception as e:
#         print(f"⚠️ Skipping {filename} due to error: {e}")

# print(f"✅ Processed and renamed {len(temp_names)} images successfully!")




import os

folder = "public/image"

# Get all files in folder
files = [f for f in os.listdir(folder) if os.path.isfile(os.path.join(folder, f))]

# Allowed image extensions
image_exts = {".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"}
images = [f for f in files if os.path.splitext(f)[1].lower() in image_exts]

# Sort files (so order is consistent)
images.sort()

# Step 1: Rename everything to temporary names
temp_names = []
for idx, filename in enumerate(images, start=1):
    ext = os.path.splitext(filename)[1].lower()
    temp_name = f"tmp_{idx}{ext}"
    os.rename(os.path.join(folder, filename), os.path.join(folder, temp_name))
    temp_names.append(temp_name)

# Step 2: Rename temp files to final sequential names
for idx, filename in enumerate(temp_names, start=1):
    ext = os.path.splitext(filename)[1].lower()
    new_name = f"{idx}{ext}"
    os.rename(os.path.join(folder, filename), os.path.join(folder, new_name))

print(f"✅ Renamed {len(images)} images from 1 to {len(images)} without conflicts")
