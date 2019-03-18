let brandSelectTag = $('#brand');
let modelSelectTag = $('#model');

let brands = [
    {   id : 1, name : 'Maruthi Suzuki' },
    {   id : 2, name : 'Suzuki NEXA'  },
    {  id : 3, name : 'Hyundai Motors' }
];
let models=[{id:1,brand_id:1,name:"Swift"},
            {id:2,brand_id:1,name:"Dzire"},{id:3,brand_id:1,name:"Brezza"},
            {brand_id:2,name:"Baleno"},{id:4,brand_id:2,name:"Ignis"},
            {brand_id:2,name:"SCross"}, {brand_id:2,name:"Ciaz"},
            {brand_id:3,name:"Hyndai i10"},{brand_id:3,name:"Hyndai Verna"},
            {brand_id:3,name:"Hyndai i20"},{brand_id:3,name:"Hyndai Creta"}];

let optionsTag = '<option value="0">Select a Brand</option> \n';
brands.forEach((brand) => {
    optionsTag += `<option value="${brand.id}">${brand.name}</option> \n`;
});
brandSelectTag.empty().append(optionsTag);

brandSelectTag.change(function () {
    let selectedBrandId = Number(brandSelectTag.val());
    let optionsTag = '';
    let selectedModels = models.filter((model) => {
        return model.brand_id === selectedBrandId;
    });
    selectedModels.forEach((selectedModel) => {
        optionsTag += `<option value="${selectedModel.id}">${selectedModel.name}</option>`;
    });
    modelSelectTag.empty().append(optionsTag);
});