const categoryController = {};
const CategorySch = require("../model/Category");
const slugify = require("slugify");

categoryController.addCategory = (req, res) => {
  
        const categoryObj = {
            name: req.body.name,
            slug : slugify(req.body.name)
        }
        if(req.body.parentId) {
            categoryObj.parentId = req.body.parentId;
        }
    const cat = new CategorySch(categoryObj);
    cat
      .save()
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => {
        return res.status(400).json({ err });
      });
  
};

const createCategories = (categories, parentId = null) => {
    const categoryList = [];
    let category;
    if(parentId === null) {
        category = categories.filter(ca => ca.parentId == undefined)
    }else {
        category = categories.filter(ca => ca.parentId == parentId)
    }
    for (let cate of category) {
        categoryList.push({
            _id: cate._id,
            name: cate.name,
            slug: cate.slug,
            children: createCategories(categories , cate._id)
        })
    }
    return categoryList;
}

categoryController.getCategory = async (req, res, next) => {
  try {
    const data = await CategorySch.find();
    const categoryList = createCategories(data);
    return res.json(categoryList);
  } catch (err) {
    res.json(err);
  }
};

// teamController.getTeam = async (req, res, next) => {
//   try {
//     const id = req.params.teamId;
//     const data = await TeamSch.findOne({
//       _id: id,
//     });
//     return res.json(data);
//   } catch (err) {
//     res.json(err);
//   }
// };

// teamController.deleteTeam = async (req, res, next) => {
//   try {
//     const id = req.params.teamId;
//     const deletedata = await TeamSch.findOneAndDelete({ _id: id });
//     return res.json(deletedata);
//   } catch (err) {
//     res.json(err);
//   }
// };
module.exports = categoryController;
