// Usage: swift make-qr.swift <text> <out.png>
// Writes a QR code (error correction M) with one pixel per module.
import CoreImage
import Foundation
import ImageIO
import UniformTypeIdentifiers

let args = CommandLine.arguments
let filter = CIFilter(name: "CIQRCodeGenerator")!
filter.setValue(args[1].data(using: .utf8), forKey: "inputMessage")
filter.setValue("M", forKey: "inputCorrectionLevel")
let image = filter.outputImage!
let context = CIContext()
let cg = context.createCGImage(image, from: image.extent)!
let dest = CGImageDestinationCreateWithURL(URL(fileURLWithPath: args[2]) as CFURL, UTType.png.identifier as CFString, 1, nil)!
CGImageDestinationAddImage(dest, cg, nil)
CGImageDestinationFinalize(dest)
print("\(cg.width)x\(cg.height)")
