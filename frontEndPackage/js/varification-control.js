//qa頁
let codeVerifyCheck = true;

$("#formVerification").codeVerify({
    type: 1,
    width: "100%",
    height: "38px",
    fontSize: "30px",
    codeLength: 4,
    btnId: "check-btn",
    ready: function () {},
    success: function () {
        // alert('驗證成功');
        codeVerifyCheck = true;
    },
    error: function () {
        // alert('驗證失敗');
        codeVerifyCheck = false;
    },
});

$(".varify-input-code").addClass("form-control");

//contact頁

// let codeCheck = true;

// $("#contactformVerification").codeVerify({
//     type: 1,
//     width: "100%",
//     height: "38px",
//     fontSize: "30px",
//     codeLength: 4,
//     btnId: "check-btn",
//     ready: function () {},
//     success: function () {
//         // alert('驗證成功');
//         codeCheck = true;
//     },
//     error: function () {
//         // alert('驗證失敗');
//         codeCheck  = false;
//     },
// });

// $(".varify-input-code").addClass("form-control");