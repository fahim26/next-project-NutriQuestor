import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === "PUT") {
    const deleteEntryId = JSON.parse(req.body);
    try {
      const deleteUser = await prisma.FoodEntry.delete({
        where: {
          id: deleteEntryId,
        },
      });
      res.status(200).json({ message: "Successfully Deleted" });
    } catch (e) {
      res.status(500).json({ message: "Delete Failed" });
    }
  }

  if (req.method === "POST") {
    console.log(" ______3-245-234444444423423423423 sdzffff ");
    try {
      console.log("******** ////////////////////////////////////  **********" , req.body);
      const data = JSON.parse(req.body);
      console.log("-- %%%% ---- %%%% ---- %%%% ---- %%%% ---- %%%%",data);
      const d = await prisma.FoodEntry.createMany({ data: data} );
      
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!! --> ",d);
      res.send(d);
      // res.status(200).json({d, message: "Successfully created" });
    } catch (e) {
      console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ :::: ",e);
      res.status(500).json({e, message: "Something went 222222 wrong" });
    }
  }
};
