(function() {  
    (window.jQuery || document.write('<script src="https://usff.navy.deps.mil/sites/netwarcom/N4-N7/KM/BenSandBox/SiteAssets/dataTableCode/dataTablelJqueryMinV3.js"></script>'));
    
        var overrideCurrentContext = {};  
        overrideCurrentContext.Templates = {};  
        overrideCurrentContext.Templates.Header = "<div class='ListAccordion'>";  
        overrideCurrentContext.Templates.Footer = "</div>";  
        overrideCurrentContext.OnPostRender = OnPostRender;  
        overrideCurrentContext.Templates.Item = ItemTemplate;  
        SPClientTemplates.TemplateManager.RegisterTemplateOverrides(overrideCurrentContext);  
    })();  
      
    function ItemTemplate(ctx) {  
        var Question = ctx.CurrentItem["Question"];  
        var Answer = ctx.CurrentItem["Answer"];  
        return "<h2>" + Question + "</h2><p>" + Answer + "</p><br/>";  
    }  
      
    function OnPostRender() {  
        $('.ListAccordion h2').click(function() {  
            $(this).next().slideToggle();  
        }).next().hide();  
        $('.ListAccordion h2').css({  
            "background-color": "grey",  
            "cursor": "pointer",  
            "color": "white",  
            "border-radius": "15px",  
            "padding-left": "10px"  
        });  
    }