//JavaScript

OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.myTemplate.size = [125, 190];
OrgChart.templates.myTemplate.node = '<rect x="0" y="0" height="190" width="125" fill="#ffffff" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>';
OrgChart.templates.myTemplate.field_0 = '<text data-width="100" data-text-overflow="multiline" style="font-size: 15px;font-weight: bold;" fill="#2D2D2D" x="62.5" y="85" text-anchor="middle">{val}</text>';
OrgChart.templates.myTemplate.field_1 = '<text data-width="110" data-text-overflow="multiline"  style="font-size: 12px;" fill="#2D2D2D" x="62.5" y="125" text-anchor="middle">{val}</text>';
OrgChart.templates.myTemplate.img_0 = '<clipPath id="{randId}"><circle cx="60" cy="37" r="30"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="30" y="7"  width="60" height="60"></image>';
OrgChart.templates.myTemplate.plus = '<circle cx="15" cy="15" r="15" fill="#0466c8" stroke="#ffffff" stroke-width="1"></circle>'
    + '<line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#ffffff"></line>'
    + '<line x1="15" y1="4" x2="15" y2="26" stroke-width="1" stroke="#ffffff"></line>';
OrgChart.templates.myTemplate.minus = '<circle cx="15" cy="15" r="15" fill="#0466c8" stroke="#ffffff" stroke-width="1"></circle>'
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
        email: "annika_schwaegerl@eurocentra.com.hk",
    },
    {
        id: 2,
        pid: 1,
        name: "Business Team",
        title: "",
        img: "",
        email: "",

    },
    {
        id: 3,
        pid: 1,
        name: "Technical Team",
        title: "",
        img: "",
        email: "",

    },
    {
        id: 4,
        pid: 1,
        name: "Services Team",
        title: "",
        img: "",
        email: "",

    },
    {
        id: 5,
        pid: 1,
        name: "Supply Chain",
        title: "",
        img: "",
        email: "",

    },
    {
        id: 6,
        pid: 1,
        name: "Operational Support Group (OSG)",
        title: "",
        img: "",
        email: "",

    },
    {
        id: 7,
        pid: 2,
        name: "Umair Ahmed",
        title: "Division Head Bonprix-Knits",
        img: "./assets/Color/15.png",
        email: "Umair@eurocentra.com.pk",

    },
    {
        id: 8,
        pid: 2,
        name: "Abdul Hafeez",
        title: "Division Head Bonprix-Woven",
        img: "./assets/Color/17.png",
        email: "abdul.hafeez@eurocentra.com.pk",

    }, {
        id: 9,
        pid: 2,
        name: "Muhammad Umar",
        title: "Division Head - Bonprix / Limango",
        img: "./assets/Color/16.png",
        email: "Umer@eurocentra.com.pk",

    },{
        id: 10,
        pid: 7,
        name: "Kashif Younus",
        title: "Deputy Merchandising Manager",
        img: "./assets/Color/21.png",
        email: "Kashif.younus@eurocentra.com.pk",

    },
    {
        id: 11,
        pid: 8,
        name: "Syed Amir Abbas",
        title: "Deputy Merchandising Manager",
        img: "./assets/Color/22.png",
        email: "Aamir.abbas@eurocentra.com.pk",
    },
    {
        id: 112,
        pid: 3,
        name: "Rana Sohaib Mustafa",
        title: "Head of Product Development & Manufacturing",
        img: "./assets/Color/2.png",
        email: "Sohaib@eurocentra.com.pk",
    },
    {
        id: 12,
        pid: 112,
        name: "Product Development",
        title: "",
        img: "",
        email: "",
    },{
        id: 13,
        pid: 112,
        name: "3D Product Innovation",
        title: "",
        img: "",
        email: "",
    },{
        id: 14,
        pid: 112,
        name: "Quality Development",
        title: "",
        img: "",
        email: "",
    },{
        id: 15,
        pid: 112,
        name: "Textile Testing",
        title: "",
        img: "",
        email: "",
    },{
        id: 16,
        pid: 112,
        name: "WFP Audits",
        title: "",
        img: "",
        email: "",
    },
    {
        id: 17,
        pid: 12,
        name: "Khizar Hayat",
        title: "Technical Lead",
        img: "./assets/Color/14.png",
        email: "khizar@eurocentra.com.pk",

    },
    {
        id: 18,
        pid: 17,
        name: "Muhammad Zeeshan",
        title: "Technical Lead",
        img: "./assets/Color/26.png",
        email: "M.zeeshan@eurocentra.com.pk",

    },
    {
        id: 19,
        pid: 18,
        name: "Muhammad Tahreem",
        title: "Technical Lead",
        img: "./assets/Color/23.png",
        email: "tehreem@eurocentra.com.pk",

    },
    {
        id: 20,
        pid: 13,
        name: "Imran Amjad",
        title: "Team Lead 3D",
        img: "./assets/Color/25.png",
        email: "imran.amjad@eurocentra.com.pk",

    },
    {
        id: 21,
        pid: 14,
        name: "MUHAMMAD ASIM",
        title: "Regional Quality Head",
        img: "./assets/Color/13.png",
        email: "asim@eurocentra.com.pk",

    },
    {
        id: 22,
        pid: 15,
        name: "Dania Jamil",
        title: "Testing Manager",
        img: "./assets/Color/31.png",
        email: "dania@eurocentra.com.pk",

    },
    {
        id: 23,
        pid: 22,
        name: "Muhammad Owais",
        title: "Laboratory Incharge",
        img: "./assets/Color/30.png",
        email: "",

    },
    {
        id: 24,
        pid: 16,
        name: "Ismail Khan",
        title: "Manager, Chemical Management",
        img: "./assets/Color/27.png",
        email: "ismail@eurocentra.com.pk",

    },
    {
        id: 113,
        pid: 4,
        name: "Zahid Sajjad",
        title: "Head of Sustainability, Digital Innovation & Services",
        img: "./assets/Color/3.png",
        email: "zahid@eurocentra.com.pk",
    },
    {
        id: 25,
        pid: 113,
        name: "Digitalization Asset Management (DAM)",
        title: "",
        img: "",
        email: "",

    },
    {
        id: 26,
        pid: 113,
        name: "Sustainability & CSR",
        title: "",
        img: "",
        email: "",

    },
    {
        id: 27,
        pid: 113,
        name: "Logistics",
        title: "",
        img: "",
        email: "",

    },
    {
        id: 28,
        pid: 113,
        name: "Product Library",
        title: "",
        img: "",
        email: "",

    },
    {
        id: 29,
        pid: 113,
        name: "Human Asset Management (HAM",
        title: "",
        img: "",
        email: "",

    },
    {
        id: 30,
        pid: 25,
        name: "Muhammad Aamir",
        title: "MIS Manager",
        img: "./assets/Color/9.png",
        email: "aamir@eurocentra.com.pk",
    },
    {
        id: 31,
        pid: 30,
        name: "Sadad Ali",
        title: "MIS Executive",
        img: "./assets/Color/19.png",
        email: "sadad@eurocentra.com.pk",
    },
    {
        id: 32,
        pid: 31,
        name: "Muhammad Noman",
        title: "Excellence Manager",
        img: "./assets/Color/8.png",
        email: "Noman@eurocentra.com.pk",
    },
    {
        id: 33,
        pid: 26,
        name: "Ahmed Adeel",
        title: "Sustainability Manager",
        img: "./assets/Color/11.png",
        email: "ahmed.adeel@eurocentra.com.pk",
    },
    {
        id: 34,
        pid: 33,
        name: "Basit Ali",
        title: "CSR Executive",
        img: "./assets/Color/18.png",
        email: "Basit.ali@eurocentra.com.pk",
    },
    {
        id: 35,
        pid: 34,
        name: "Jameel Ahmed",
        title: "Project Manager",
        img: "./assets/Color/10.png",
        email:"Jameel@eurocentra.com.pk",
    },
    {
        id: 36,
        pid: 27,
        name: "Grephen Almas",
        title: "Logistics Manager",
        img: "./assets/Color/12.png",
        email: "grephen@eurocentra.com.pk",
    },
    {
        id: 37,
        pid: 36,
        name: "Mehreen Idrees",
        title: "Assisstant Logistics Manager",
        img: "./assets/Color/20.png",
        email: "Mehreen@eurocentra.com.pk",
    },
    {
        id: 38,
        pid: 28,
        name: "Sikandar Solangi",
        title: "Librarian",
        img: "./assets/Color/00.png",
        email: "",
    },
    {
        id: 39,
        pid: 29,
        name: "TBH",
        title: "Talent Acquisition Specialist",
        img: "./assets/Color/00.png",
        email: "",
    },
    {
        id: 40,
        pid: 39,
        name: "Muhammad Safwan",
        title: "Working Student",
        img: "./assets/Color/6.png",
        email: "hr@eurocentra.com.pk",
    },
    {
        id: 114,
        pid: 5,
        name: "Abdul Saboor",
        title: "Head of Supply Chain",
        img: "./assets/Color/4.png",
        email: "abdul.saboor@eurocentra.com.pk",
    },
    {
        id: 115,
        pid: 6,
        name: "Madni Khan",
        title: "Manager Finance & Corporate Governance'",
        img: "./assets/Color/5.png",
        email: "Madni@eurocentra.com.pk",
    },
    {
        id: 41,
        pid: 115,
        name:"Sajjad Hussain",
        title: "IT & Communication Manager",
        img: "./assets/Color/56.png",
        email: "it@eurocentra.com.pk",
    },
    {
        id: 42,
        pid: 41,
        name: "Abdul Manan",
        title: "Facility Services Manager",
        img: "./assets/Color/57.png",
        email: "abdulmanan@eurocentra.com.pk",
    },
    {
        id: 43,
        pid: 42,
        name: "Pervez Ahmed",
        title: "Front Desk officer",
        img: "./assets/Color/55.png",
        email: "pervez@eurocentra.com.pk",
    },
    {
        id: 44,
        pid: 43,
        name: "Naeem",
        title: "Facility Officer",
        img: "./assets/Color/54.png",
        email: "",
    },
    {
        id: 45,
        pid: 44,
        name: "Javaid",
        title: "Chauffeur",
        img: "./assets/Color/53.png",
        email: "",
    },
    
]);



document.getElementById('editForm').addEventListener('click', function (e) {
    e.preventDefault();
    chart.editUI.hide();
})