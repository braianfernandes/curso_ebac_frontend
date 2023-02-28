$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault(); 
        const novaTarefa = $('#tarefa').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`
            <div>
                <a>${novaTarefa}</a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#tarefa').val('');

        $("ul li").click(function () {
            $(this).css("text-decoration", "line-through")
        });
    })

})