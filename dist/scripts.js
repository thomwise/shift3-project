(function($){
    $(document).ready(function() {
        
        $('.name').on("change keyup paste",
        function(){
            if($(this).val()){
            $('.icon-paper-plane').addClass("next");
            } else {
            $('.icon-paper-plane').removeClass("next");
            }
        }
        );

        $('.next-button').hover(
        function(){
            $(this).css('cursor', 'pointer');
        }
        );

        $('.next-button.name').click(
        function(){
            console.log("Something");
            $('.name-section').addClass("fold-up");
            $('.company-section').removeClass("folded");
        }
        );

        $('.company').on("change keyup paste",
        function(){
            if($(this).val()){
            $('.icon-lock').addClass("next");
            } else {
            $('.icon-lock').removeClass("next");
            }
        }
        );

        $('.next-button').hover(
        function(){
            $(this).css('cursor', 'pointer');
        }
        );

        $('.next-button.company').click(
        function(){
            console.log("Something");
            $('.company-section').addClass("fold-up");
            $('.email-section').removeClass("folded");
        }
        );

        $('.email').on("change keyup paste",
        function(){
            if($(this).val()){
            $('.icon-repeat-lock').addClass("next");
            } else {
            $('.icon-repeat-lock').removeClass("next");
            }
        }
        );

        $('.next-button.email').click(
        function(){
            console.log("Something");
            $('.email-section').addClass("fold-up");
            $('.success').css("marginTop", 0);
        }
        );
    });
})(jQuery);	