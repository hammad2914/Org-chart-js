//JavaScript

OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.myTemplate.size = [125, 170];
OrgChart.templates.myTemplate.node = '<rect x="0" y="0" height="170" width="125" fill="#ffffff" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>';
OrgChart.templates.myTemplate.field_0 = '<text data-width="100" data-text-overflow="multiline" style="font-size: 16px;font-weight: bold;" fill="#2D2D2D" x="62.5" y="85" text-anchor="middle">{val}</text>';
OrgChart.templates.myTemplate.field_1 = '<text data-width="110" data-text-overflow="multiline"  style="font-size: 14px;" fill="#2D2D2D" x="62.5" y="135" text-anchor="middle">{val}</text>';
OrgChart.templates.myTemplate.img_0 = '<clipPath id="{randId}"><circle cx="60" cy="37" r="30"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="30" y="7"  width="60" height="60"></image>';
OrgChart.templates.myTemplate.plus = '<circle cx="15" cy="15" r="15" fill="#57B6F1" stroke="#ffffff" stroke-width="1"></circle>'
    + '<line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#ffffff"></line>'
    + '<line x1="15" y1="4" x2="15" y2="26" stroke-width="1" stroke="#ffffff"></line>';
OrgChart.templates.myTemplate.minus = '<circle cx="15" cy="15" r="15" fill="#37D8BF" stroke="#ffffff" stroke-width="1"></circle>'
    + '<line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#ffffff"></line>';



var editForm = function () {
    this.nodeId = null;
};

editForm.prototype.init = function (obj) {
    var that = this;
    this.obj = obj;
    this.editForm = document.getElementById("editForm");
    this.emailInput = document.getElementById("email");
    this.addressInput = document.getElementById("address");
    this.phone1Input = document.getElementById("phone1");
    this.phone2Input = document.getElementById("phone2");
    this.imgInput = document.getElementById("img");
    this.nameInput = document.getElementById("name");
    this.titleInput = document.getElementById("title");
    this.cancelButton = document.getElementById("close");

    this.cancelButton.addEventListener("click", function () {
        that.hide();
    });
};

editForm.prototype.show = function (nodeId) {
    this.nodeId = nodeId;

    var left = document.body.offsetWidth / 2 - 150;

    this.editForm.style.left = left + "px";
    var node = chart.get(nodeId);
    if (!node) return;
    this.emailInput.innerHTML = node.email ? node.email : "";
    this.imgInput.src = node.img ? node.img : "#";
    this.nameInput.innerHTML = node.name ? node.name : "";
    this.titleInput.innerHTML = node.title ? node.title : "";

    this.editForm.style.display = "block";

    OrgChart.animate(this.editForm, { opacity: 0 }, { opacity: 1 }, 300, OrgChart.anim.inOutSin);
};

editForm.prototype.content = function (id, detailsMode, dontAnim, width, dontRenderButtons) {
    var div = document.createElement('div');
    div.innerHTML = document.getElementById('editForm').innerHTML;
    div.innerHTML += '<style>#close{display:none !important;}</style>';
    return { element: div, focusId: '', title: '', shareText: '' };
};

editForm.prototype.hide = function (showldUpdateTheNode) {
    this.editForm.style.display = "none";
    this.editForm.style.opacity = 0;

};

var chart = new OrgChart(document.getElementById('tree'), {
    mouseScrool: OrgChart.none,
    toolbar: {
        zoom: true,
    },
    enableSearch: false,
    template: "myTemplate",
    nodeBinding: {
        field_0: "name",
        field_1: 'title',
        img_0: "img"
    },
    editUI: new editForm()
});




chart.load([
    {
        id: 1,
        name: "Kaschif R. Israr",
        title: "Country Head",
        img: "./assets/Color/1.png",
        email: "Kaschif@eurocentra.com.pk",
    },
    {
        id: 101,
        name: "Annika Schwaegerl",
        title: "Sales Director Europe",
        img: "./assets/Color/0.png",
        email: "my@email.com",
    },
    {
        id: 2,
        pid: 1,
        name: "Samson Lee",
        title: "",
        img: "",
        email: "",

    },
    {
        id: 3,
        pid: 1,
        name: "Samson Lee",
        title: "",
        img: "",
        email: "",

    },
    {
        id: 4,
        pid: 1,
        name: "Samson Lee",
        title: "",
        img: "",
        email: "",

    },
    {
        id: 5,
        pid: 1,
        name: "Samson Lee",
        title: "",
        img: "",
        email: "",

    },
    {
        id: 6,
        pid: 1,
        name: "Samson Lee",
        title: "",
        img: "",
        email: "",

    },
    {
        id: 7,
        pid: 2,
        name: "Samson Lee",
        title: "Senior manager, IT Operations",
        img: "https://cdn.balkan.app/shared/4.jpg",
        email: "my@email.com",

    },
    {
        id: 8,
        pid: 2,
        name: "Samson Lee",
        title: "Senior manager, IT Operations",
        img: "https://cdn.balkan.app/shared/4.jpg",
        email: "my@email.com",

    }, {
        id: 9,
        pid: 2,
        name: "Samson Lee",
        title: "Senior manager, IT Operations",
        img: "https://cdn.balkan.app/shared/4.jpg",
        email: "my@email.com",

    },{
        id: 10,
        pid: 7,
        name: "Samson Lee",
        title: "Senior manager, IT Operations",
        img: "https://cdn.balkan.app/shared/4.jpg",
        email: "my@email.com",

    },
    {
        id: 11,
        pid: 8,
        name: "Samson Lee",
        title: "Senior manager, IT Operations",
        img: "https://cdn.balkan.app/shared/4.jpg",
        email: "my@email.com",
    },
    {
        id: 112,
        pid: 3,
        name: "Samson Lee",
        title: "Senior manager, IT Operations",
        img: "https://cdn.balkan.app/shared/4.jpg",
        email: "my@email.com",
    },
    {
        id: 12,
        pid: 112,
        name: "Samson Lee",
        title: "",
        img: "",
        email: "",
    },{
        id: 13,
        pid: 112,
        name: "Samson Lee",
        title: "",
        img: "",
        email: "",
    },{
        id: 14,
        pid: 112,
        name: "Samson Lee",
        title: "",
        img: "",
        email: "",
    },{
        id: 15,
        pid: 112,
        name: "Samson Lee",
        title: "",
        img: "",
        email: "",
    },{
        id: 16,
        pid: 112,
        name: "Samson Lee",
        title: "",
        img: "",
        email: "",
    },
    {
        id: 17,
        pid: 12,
        name: "Samson Lee",
        title: "Senior manager, IT Operations",
        img: "https://cdn.balkan.app/shared/4.jpg",
        email: "my@email.com",

    },
    {
        id: 18,
        pid: 17,
        name: "Samson Lee",
        title: "Senior manager, IT Operations",
        img: "https://cdn.balkan.app/shared/4.jpg",
        email: "my@email.com",

    },
    {
        id: 19,
        pid: 18,
        name: "Samson Lee",
        title: "Senior manager, IT Operations",
        img: "https://cdn.balkan.app/shared/4.jpg",
        email: "my@email.com",

    },
    {
        id: 20,
        pid: 13,
        name: "Samson Lee",
        title: "Senior manager, IT Operations",
        img: "https://cdn.balkan.app/shared/4.jpg",
        email: "my@email.com",

    },
    {
        id: 21,
        pid: 14,
        name: "Samson Lee",
        title: "Senior manager, IT Operations",
        img: "https://cdn.balkan.app/shared/4.jpg",
        email: "my@email.com",

    },
    {
        id: 22,
        pid: 15,
        name: "Samson Lee",
        title: "Senior manager, IT Operations",
        img: "https://cdn.balkan.app/shared/4.jpg",
        email: "my@email.com",

    },
    {
        id: 23,
        pid: 22,
        name: "Samson Lee",
        title: "Senior manager, IT Operations",
        img: "https://cdn.balkan.app/shared/4.jpg",
        email: "my@email.com",

    },
    {
        id: 24,
        pid: 16,
        name: "Samson Lee",
        title: "Senior manager, IT Operations",
        img: "https://cdn.balkan.app/shared/4.jpg",
        email: "my@email.com",

    },
    {
        id: 113,
        pid: 4,
        name: "Samson Lee",
        title: "Senior manager, IT Operations",
        img: "https://cdn.balkan.app/shared/4.jpg",
        email: "my@email.com",
    },
    {
        id: 25,
        pid: 113,
        name: "Samson Lee",
        title: "",
        img: "",
        email: "",

    },
    {
        id: 26,
        pid: 113,
        name: "Samson Lee",
        title: "",
        img: "",
        email: "",

    },
    {
        id: 27,
        pid: 113,
        name: "Samson Lee",
        title: "",
        img: "",
        email: "",

    },
    {
        id: 28,
        pid: 113,
        name: "Samson Lee",
        title: "",
        img: "",
        email: "",

    },
    {
        id: 29,
        pid: 113,
        name: "Samson Lee",
        title: "",
        img: "",
        email: "",

    },
    {
        id: 114,
        pid: 5,
        name: "Samson Lee",
        title: "Senior manager, IT Operations",
        img: "https://cdn.balkan.app/shared/4.jpg",
        email: "my@email.com",
    },
    {
        id: 115,
        pid: 6,
        name: "Samson Lee",
        title: "Senior manager, IT Operations",
        img: "https://cdn.balkan.app/shared/4.jpg",
        email: "my@email.com",
    },
    
]);



document.getElementById('editForm').addEventListener('click', function (e) {
    e.preventDefault();
    chart.editUI.hide();
})