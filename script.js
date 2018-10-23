"use strict";
$(document).ready(() => {
let tableNumber;

    $(document).on("click", ".available", (event) => {
        $(".reservation").css("display", "flex");
        tableNumber = $(event.target);
        // console.log($(event.target));
    });

    $(document).on("click",".close", (event) => {
        $(".reservation").css("display", "none");
    });

    $(document).on("click",".save", (event) => {
        $(tableNumber).addClass("reserved");
        $(tableNumber).removeClass("available");
        $(tableNumber).css("cursor", "not-allowed");
        $(".reservation").css("display", "none")
        console.log($(".available"));
    });

    $(document).on("mouseenter", ".available", (event) => {
        $(event.target).addClass("focusedTable");
        $(event.target).css("cursor", "pointer");
    });

    $(document).on("mouseleave", ".available", (event) => {
        $(event.target).removeClass("focusedTable");
    });
})