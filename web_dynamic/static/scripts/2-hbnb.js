$(document).ready(function () {

    const amen_dict = {};
    $("#input").click(function() {
        $(":input").each(function() {
            if (this.checked===true) {
                amen_dict[$(this).data('name')] = $(this).data('id');
            } else {
                delete amen_dict[$(this).data('name')];
            }
        });
        const amen_list = [];
        for (const key in amen_dict) {
            amen_list.push(amen_dict[key]);
        }
        $(".amenities h4").html;
    })
})
