const {db} = require('../utils/initApp');

exports.getMenu = (request, response)=>{
    db.collection("menu")
    .orderBy("createdAt", "desc")
    .get()
    .then((res)=>{
        let tempMenu = [];
        res.forEach((data)=>{
            tempMenu.push({
                foodName:data.data().foodName,
                price:data.data().price,
                imageUrl:data.data().imageUrl,
            });
        });
        return response.json(tempMenu);
    })
    .catch((err)=>{
        console.log(err);
        return response.status(500).json({error:err.code});
    })
}