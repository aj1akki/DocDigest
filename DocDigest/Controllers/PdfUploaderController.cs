using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DocDigest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PdfUploaderController : ControllerBase
    {
        [HttpPost("upload")]
        public async Task<IActionResult> UploadPdf(IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("No file uploaded or file is empty.");
            }

            // Ensure that the file is a PDF (Optional)
            if (!file.ContentType.Equals("application/pdf"))
            {
                return BadRequest("Only PDF files are allowed.");
            }

            // Define the temporary storage path (e.g., "wwwroot/uploads" or a temp folder)
            var uploadPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads");
            Directory.CreateDirectory(uploadPath); // Ensure the folder exists

            var filePath = Path.Combine(uploadPath, file.FileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            // Optionally, add logic to process the file, store it in a database, etc.

            return Ok(true); // Return true to indicate successful upload
        }

    }
}
