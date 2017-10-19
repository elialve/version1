/// <reference path="../global/jquery.1.8.1.min.js" />

//..........................Header Navigation js STARTS Here..........................//HeaderNavigation.js

var jMenu = jQuery.noConflict();
jMenu(document).ready(function () {

    jMenu('div.InnerNav > ul').each(function () {
        jMenu(this).addClass('FirstLevel');
    });

    jMenu("li#item-1").mouseenter(function () {
        jMenu("div#item-1 ul li:first .FixedDiv:first").attr('style', 'display:block;');
        jMenu("div#" + jMenu(this).attr("id") + " ul > li:first > a:first").addClass('Current');
    })

    jMenu("li.ItemLevel-1 > a.ItemLinks").mouseenter(function () {
        jMenu("div#item-1 ul li:first .FixedDiv:first").removeAttr('style');
        jMenu("div#item-1 ul > li:first > a:first").removeClass('Current');
    })

    jMenu('ul.Nav > li').each(function () {
        jMenu(this).mouseenter(function () {
            jMenu("div.InnerDiv").hide();
            if (jMenu("div#" + jMenu(this).attr("id")).find("ul.FirstLevel").children().length > 0) {
                jMenu("div#" + jMenu(this).attr("id")).show();
            }
            jMenu("ul.Nav > li").removeAttr("class");
            jMenu("li#" + jMenu(this).attr("id")).attr('class', 'hover');
        })
        jMenu("div#" + jMenu(this).attr("id")).mouseleave(function () {
            jMenu("div#" + jMenu(this).attr("id")).hide();
        })
        jMenu("li#item-4").mouseleave(function () {
            jMenu(this).removeAttr("class");
        })

        jMenu("div.InnerDiv, ul.Nav").mouseleave(function () {
            jMenu("ul.Nav > li").removeAttr("class");
        })

        jMenu("div.InnerDiv").mouseenter(function () {
            jMenu("ul.Nav > li").removeAttr("class");
            jMenu("li#" + jMenu(this).attr("id")).attr('class', 'hover');
        })

        jMenu("div.Header").mouseenter(function () {
            jMenu("div.InnerDiv").hide();
        })
    });

    jMenu("div#item-1 div.SecondLevelDiv").each(function () {
        jMenu(this).find("ul.SecondLevel:odd").addClass('Right');
    })

    jMenu('.Nav li').mouseover(function () {
        var left = jMenu(this).offset().left;
        var currentId = jMenu(this).attr('id');
        jMenu('div#' + currentId).css({ 'left': left, 'position': 'absolute' });
    });



    var currentHref = window.location.href;

    jMenu('.NavContainer').find('a').each(function () {

        var anchorURl = jMenu(this).attr("href");
        if (anchorURl.split("/")[2] != undefined) {
            if (currentHref.indexOf(anchorURl) >= 0) {
                var refLi = jMenu(this).attr("refli");
                jMenu("#" + refLi).find('a').css({ "color": "#fecb00" });
                return false;
            }
        }
    });
    AddYellowStripClass();

});

function AddYellowStripClass() {
    jMenu("ul.Product-Tab").find("a.ItemLinks").each(function () {
        var linkText = jMenu(this).attr('href');
        if (linkText != undefined) {
            var lowerCaseName = linkText.toString().toLowerCase();
            if (lowerCaseName.indexOf("gaming") >= 0) {
                var liParent = jMenu(this).parent();
                jMenu(liParent).addClass("yellow-strip");
            }
        }
    });

}

//..........................Header Navigation js Ends Here..........................//HeaderNavigation.js

//..........................Footer Navigation js STARTS Here..........................//FooterNavigation.js

//var jMenu = jQuery.noConflict();

//function RenderSubCategory() {
//    jMenu(function () {
//        jMenu("div#FooterNavigation ul:last").addClass("Last");
//        jMenu(ArrangeSocialIcons);
//    });

//    jMenu(function () {
//        jMenu("div.FooterBtmLink ul.FooterNav li:last").addClass("Last");
//    });

//    function ArrangeSocialIcons() {
//        var lnkHtml = '<li class="SocialGroupIcon">';
//        jMenu("div#FooterNavigation ul li a img").each(function () {
//            jMenu(this).parent().parent().parent().attr('rel', 'hasIcon');

//            if (jMenu(this).attr('src').indexOf("facebook") != -1) {
//                jMenu(this).parent().attr('class', 'fb-icon');
//            }

//            if (jMenu(this).attr('src').indexOf("google") != -1) {
//                jMenu(this).parent().attr('class', 'tw-icon');
//            }

//            if (jMenu(this).attr('src').indexOf("twitter") != -1) {
//                jMenu(this).parent().attr('class', 'gp-icon');
//            }

//            if (jMenu(this).attr('src').indexOf("youtube") != -1) {
//                jMenu(this).parent().attr('class', 'yt-icon');
//            }

//            lnkHtml += jMenu(this).parent().parent().html();
//            jMenu(this).parent().parent().remove();

//        });
//        lnkHtml += '</li>';
//        if (lnkHtml.length) {
//            jMenu("ul[rel='hasIcon']").append(lnkHtml);
//        }
//    };
//}

//..........................Footer Navigation js Ends Here..........................//FooterNavigation.js

//..........................Site Search js STARTS Here..........................//FooterNavigation.js

// Removed script as no more in use

//..........................Site Search js Ends Here..........................//FooterNavigation.js

//..........................Country Selector js STARTS Here..........................//CountrySelector.js
/// <reference path="/jquery.1.8.1.min.js" />

jQuery(document).ready(function () {

    jQuery(function () {
        var region = jQuery("input[id*='hdnCurrentCountryCode']").val();
        if (region.length && region != undefined) {
            jQuery("select[id*='ddlCountries']").val(region);
        }
    });

    function CountryChangedEvent(language) {
        var selectedValue = jQuery(this).val();
    }

    jQuery(function () {
        jQuery("[id*='ddlCountries']").selectbox({
            onOpen: function (inst) {
                jQuery(this).next().find("li:last").attr("class", "Last");
            },
            onChange: function (val, inst) {
                var selectedLang = jQuery('option[value=' + val + ']', this).attr('langCode');
                //alert($(this).val() + " " + val + " " + selectedLang);
                ChangeCountry(selectedLang);
            }
        });
    });

    jQuery(function () {
        jQuery("[id*='ddlSort']").selectbox({
            onOpen: function (inst) {
                jQuery(this).next().find("li:last").attr("class", "Last");
            }
        });
    });

    jQuery(function () {
        jQuery("[id*='ddlSortBy']").selectbox({
            onOpen: function (inst) {
                jQuery(this).next().find("li:last").attr("class", "Last");
            }
        });
    });

    jQuery(function () {
        jQuery(".scfDropListGeneralPanel select.scfDropList").selectbox({
            onOpen: function (inst) {
                jQuery(this).next().find("li:last").attr("class", "Last");
            }
        });
    });

    jQuery(function () {
        var text = jQuery.trim(jQuery("[rel*='sortProductListing']").next().find('a.sbSelector').html());
        if (text != null && text != undefined) {
            if (text.length > 21) {
                var trimedText = text.substring(0, 21) + "...";
                jQuery("[rel*='sortProductListing']").next().find('a.sbSelector').html(trimedText);
            }
        }
    });

    function ChangeCountry(language) {
        //    var currLang = jQuery("[id*='hdnCurrentLanguage']").val().toLowerCase();
        //    var pathname = String(window.location.href).toLowerCase();

        //    var findRes = pathname.search(currLang);

        //    if (findRes > 0) {
        //        var newPathname = pathname.replace(currLang, language);
        //        location.href = newPathname.toLowerCase();
        //    }
        //    else {
        //        var newPathname = pathname.replace(currLang, language);
        //        newPathname = pathname + language;
        //        location.href = newPathname.toLowerCase();
        //    }

        jQuery("#pleaseWaitDiv").show();

        var currentItemId = jQuery("[id*='hdnCurrentItemId']").val();
        var searchQuery = jQuery("[id*='hdnSearchQuery']").val();

        if (searchQuery == null || searchQuery == undefined) {
            searchQuery = '';
        }

        var _params = "{'language':'" + language + "','currentItemId':'" + currentItemId + "','searchQuery':'" + searchQuery + "'}";

        jQuery.ajax({
            type: "POST",
            url: "/services/ProductListing.asmx/ChangeCountry",
            contentType: "application/json; charset=utf-8",
            data: _params,
            dataType: "json",
            async: false,
            success: function (response) {
                if (response.d != null && response.d != undefined && response.d.length) {
                    location.href = response.d;
                }
            },
            error: function (response) {
            }
        });
    };
});
//.........................CountrySelector js Ends Here..........................//CountrySelector.js

var html = '';

function SetBlogGallery() {
    var count = 0;
    var id = '';
    jQuery("#divBlogList div[rel='divBlogGallerySlider']").each(function () {
        count++;
        id = 'divBlogGallerySlider-' + count;
        jQuery(this).attr('id', id);
        jQuery('#' + jQuery(this).attr('id') + ' a.prev').attr('id', 'prev-' + count);
        jQuery('#' + jQuery(this).attr('id') + ' a.next').attr('id', 'next-' + count);
        SetSlider(jQuery(this).attr('id'), count);
        SetGalleryGroup(jQuery(this).attr('id'), count);
    })
    jQuery('#divTempPirobox').html(html);
};

function SetSlider(element, count) {
    jQuery('#' + element + ' ul.gal-items').carouFredSel({
        prev: '#prev-' + count,
        next: '#next-' + count,
        auto: false
    });
};

function SetGalleryGroup(element, count) {
    jQuery('#' + element + ' ul li a').each(function () {
        jQuery(this).attr('class', 'pirobox_gallery' + count);
    })
};

jQuery("div#wrapper").next().text(function () {
    var hdnField = jQuery("div#wrapper").next().find("input#__PREVIOUSPAGE");
    if (hdnField != null) {
        return jQuery(this).next().text().replace('>', ' ');
    };
});

//.........................Blog Gallery inline js Starts Here..........................//

jQuery(function () {
    jQuery("#divTempPirobox").html("<ul>" + jQuery("ul.gal-items").html() + "</ul>");
    jQuery("#divTempPirobox ul li a").each(function () {
        jQuery(this).attr("class", "pirobox_gall2")
    })
});

function CheckPagingLinks() {
    var maxBlogCount = jQuery("#hdnMaxBlogCount").val();

    if (maxBlogCount != null && maxBlogCount == 'true') {
        //jQuery("#divBlogList .Bot .SepLine").removeClass('SepLine');
        //jQuery("#divBlogList .Mid").insertAfter().html("<div class='BlogContentBlock'><div class='BlogBlock'><p>" + jQuery("input[id$='hdnNoBlogFoundMsg']").val() + "</p></div></div>");
        jQuery("<div class='BlogContentBlock'><div class='BlogBlock'><p>" + jQuery("input[id$='hdnNoBlogFoundMsg']").val() + "</p></div></div>").insertAfter("#divBlogList .Mid .SepLine");
        jQuery("#lnkOlderBlog").hide();
        jQuery("#lnkNewerBlog").hide();
        return;
    };

    var pageNumber = jQuery("#hdnCurrentBlogPage").val();
    if (pageNumber !== null || pageNumber !== undefined) {
        if (Number(pageNumber) <= 1) {
            jQuery("#lnkNewerBlog").hide();
        }
        if (Number(pageNumber) === 0) {
            jQuery("#lnkNewerBlog").show();
            jQuery("#lnkOlderBlog").hide();
        }
    }
};

//.........................Blog Gallery inline js Ends Here..........................//