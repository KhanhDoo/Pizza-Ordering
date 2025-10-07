export async function POST(request) {
    const data = await request.formData();
    if (data.get('file')) {
        // upload the file
        
    }
    return Response.json(true);
}