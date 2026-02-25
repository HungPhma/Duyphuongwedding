import qrcode

# Input URL
url = input("Enter URL: ")

# DPI settings list
dpi_settings = [300, 600, 1200]

for dpi in dpi_settings:

    # Adjust box_size based on DPI (very important)
    box_size = int(dpi / 20)

    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=box_size,
        border=6
    )

    qr.add_data(url)
    qr.make(fit=True)

    img = qr.make_image(
        fill_color="black",
        back_color="white"
    )

    filename = f"qr_print_{dpi}dpi.png"

    # Save with DPI metadata
    img.save(filename, dpi=(dpi, dpi))

    print(f"✅ Generated {filename}")

print("✅ All QR print resolutions generated")
print(url)