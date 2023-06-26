import File from "../models/file.js";

async function imageController(req,res) {

    const fileObj = {
        path:req.file.path,
        name:req.file.originalname,
    }

    try{                                                                                                                       
        const file = await File.create(fileObj);
        res.status(200).json({path:`https://share-net-api1.onrender.com/file/${file._id}` });
        console.log(req);
    }catch(e){
        console.log("Error : " + e.message);
        res.status(500).json({err:e.message})
    }
}

export const downloadImage = async(req,res)=>{

    try{
      const fileFetched =  await File.findById(req.params.fileId)
      
      fileFetched.downloadContent++;
      
      await fileFetched.save();
      
      res.download(fileFetched.path,fileFetched.name);
    }catch(e){
        console.log(e.message);
        return res.status(500).json({error:e.message})
    }


}

export default imageController
