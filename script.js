"use strict";
$(document).ready(() => {
let table;

    $(document).on("click", ".available", (event) => {
        $(".reservation").slideDown("slow");
        $(".reservation .table-number").text(`Table Number: ${$(event.target)[0].outerText}`);
        table = $(event.target);
    });

    $(document).on("click",".close", (event) => {
        $(".reservation").slideUp("slow");
    });

    $(document).on("click",".save", (event) => {
        $(table).addClass("reserved").removeClass("available").css("cursor", "not-allowed").attr("name", $(".resInput").eq(0).val()).attr("partySize", $(".resInput").eq(2).val());
        $(".resInput").each(function () {
            $(this).val("");
        });
        $(".reservation").slideUp("slow");
    });

    $(document).on("mouseenter", ".available", (event) => {
        $(event.target).addClass("focusedTable").css("cursor", "pointer");
    });

    $(document).on("mouseleave", ".available", (event) => {
        $(event.target).removeClass("focusedTable");
    });

    $(document).on("mouseenter", ".reserved", (event) => {
        $(event.target).append(`<section class="resCard"><p>Name: ${$(event.target).attr("name")}</p><p>Size of party: ${$(event.target).attr("partySize")}`);
    });

    $(document).on("mouseleave", ".reserved", (event) => {
        $(".resCard").remove();
    });
});