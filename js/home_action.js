/**
 * 
 */
"use strict";
$(document).ready(function () {
    prepareShopByCategoryCard(cardData);
    $('body').on('mouseleave', '#navbarSupportedContent', function (event)
    {
        $("#dropdown").hide();
    });
    $('body').on('click', '#navbarSupportedContent #navContentDiv', function (event)
    {
        $("#dropdown").hide();
    });
    $('body').on('mouseover', '#navbarSupportedContent #navContentDiv a', function (event)
    {
        var hoverText = $(this).text().toLowerCase();
        prepareCategoryDropdown(hoverText);
        $("#dropdown").show();
    });
    $('body').on('mouseleave', '#profileUl', function (event)
    {
        $("#profileDropdown").hide();
    });
    $('body').on('mouseover', '#profileUl #profileDropdownDiv', function (event)
    {
        prepareProfileDropdown();
        $("#profileDropdown").show();
    });
    $('body').on('click', '#navbarSupportedContent, #profileUl', function (event)
    {
        
    });
});

function prepareCategoryDropdown(hoverText)
{
    try
    {
        var category = [];
        $("#dropdown").empty();
        $("#profileDropdown").empty();
        if (hoverText === 'men')
        {
            category = menCategory;
            for (var i = 0; i < category.length; i++)
            {
                var category = category[i];
            }
            prepareMenDropdown(category);
        }
        else if (hoverText === 'women')
        {
            category = womenCategory;
            for (var i = 0; i < womenCategory.length; i++)
            {
                var category = category[i];
            }
            prepareWomenDropdown(category);
        }
        else if (hoverText === 'kids')
        {
            category = kidsCategory;
            for (var i = 0; i < kidsCategory.length; i++)
            {
                var category = category[i];
            }
            prepareKidsDropdown(category);
        }
        else if (hoverText === 'home & living')
        {
            category = homeLiving;
            for (var i = 0; i < category.length; i++)
            {
                var category = category[i];
            }
            prepareHomeAndLivingDropdown(category);
        }
        else if (hoverText === 'beauty')
        {
            category = beauty;
            for (var i = 0; i < category.length; i++)
            {
                var category = category[i];
            }
            prepareBeautyDropdown(category);
        }
        else if (hoverText === 'studio')
        {
            prepareStudioDropdown();
        }
    }
    catch (err)
    {
        console.log(err);
    }
}

function prepareMenDropdown(category)
{
    try
    {
        var dropdownDiv = $('#dropdown');

        var mainDiv = $('<div>', {
            class: 'col-12 d-flex'
        });
        dropdownDiv.append(mainDiv);

        var topWearMainDiv = $('<div>', {
            class: 'dropdown-header col-2 mx-3 p-l-25'
        }).append('Topwear');
        mainDiv.append(topWearMainDiv);
        for (var i = 0; i < category.topWear.length; i++)
        {
            topWearMainDiv.append('<li class="dropdown-item px-0">' + category.topWear[i] + '</li>');
        }
        var divider = $('<div>', {
            class: 'dropdown-divider'
        });
        topWearMainDiv.append(divider);

        var bottomWearMainDiv = $('<div>', {
            class: 'dropdown-header col-2 mx-3'
        }).append('Bottomwear');
        mainDiv.append(bottomWearMainDiv);
        for (var i = 0; i < category.bottomWear.length; i++)
        {
            bottomWearMainDiv.append('<li class="dropdown-item px-0">' + category.bottomWear[i] + '</li>');
        }

        var indianWearMainDiv = $('<div>', {
            class: 'dropdown-header col-2 px-0'
        }).append('Indian & Festive Wear');
        topWearMainDiv.append(indianWearMainDiv);
        for (var i = 0; i < category.indianAndFestiveWear.length; i++)
        {
            indianWearMainDiv.append('<li class="dropdown-item px-0">' + category.indianAndFestiveWear[i] + '</li>');
        }
        bottomWearMainDiv.append($('<div>', {
            class: 'dropdown-divider'
        }));
        var innerWearMainDiv = $('<div>', {
            class: 'dropdown-header col-2 px-0'
        }).append('Innerwear & Sleepwear');
        bottomWearMainDiv.append(innerWearMainDiv);
        for (var i = 0; i < category.innerWearAndSleepwear.length; i++)
        {
            innerWearMainDiv.append('<li class="dropdown-item px-0">' + category.innerWearAndSleepwear[i] + '</li>');
        }
        bottomWearMainDiv.append($('<div>', {
            class: 'dropdown-divider'
        }));
        bottomWearMainDiv.append(
            $('<div>', {
                class: ''
            }).append('Plus Size')
        );

        var footWearMainDiv = $('<div>', {
            class: 'dropdown-header col-2 mx-2'
        }).append('Footwear');
        mainDiv.append(footWearMainDiv);
        for (var i = 0; i < category.footwear.length; i++)
        {
            footWearMainDiv.append('<li class="dropdown-item px-0">' + category.footwear[i] + '</li>');
        }
        footWearMainDiv.append($('<div>', {
            class: 'dropdown-divider'
        }));

        footWearMainDiv.append($('<div>', {
            class: 'py-2'
        }).append('Personal Case & Grooming'));
        footWearMainDiv.append($('<div>', {
            class: 'py-2'
        }).append('Sunglases & Frames'));
        footWearMainDiv.append($('<div>', {
            class: 'py-2'
        }).append('Watches'));

        var sportsWearMainDiv = $('<div>', {
            class: 'dropdown-header col-2 mx-4'
        }).append('Sports & Active Wear');
        mainDiv.append(sportsWearMainDiv);
        for (var i = 0; i < category.sportsAndActiveWear.length; i++)
        {
            sportsWearMainDiv.append('<li class="dropdown-item px-0">' + category.sportsAndActiveWear[i] + '</li>');
        }
        sportsWearMainDiv.append($('<div>', {
            class: 'dropdown-divider'
        }));

        var gadgetsMainDiv = $('<div>', {
            class: 'dropdown-header col-2 px-0'
        }).append('Footwear');
        sportsWearMainDiv.append(gadgetsMainDiv);
        for (var i = 0; i < category.gadgets.length; i++)
        {
            gadgetsMainDiv.append('<li class="dropdown-item px-0">' + category.gadgets[i] + '</li>');
        }

        var fashionMainDiv = $('<div>', {
            class: 'dropdown-header col-2 px-0 mx-2'
        }).append('Fashion Accessories');
        mainDiv.append(fashionMainDiv);
        for (var i = 0; i < category.fashionAccessories.length; i++)
        {
            fashionMainDiv.append('<li class="dropdown-item px-0">' + category.fashionAccessories[i] + '</li>');
        }
        fashionMainDiv.append($('<div>', {
            class: 'dropdown-divider'
        }));
        fashionMainDiv.append($('<div>', {
            class: 'py-2'
        }).append('Bags & Backpacks'));
        fashionMainDiv.append($('<div>', {
            class: 'py-2'
        }).append('Luggages & Trolleys'));
    }
    catch (err)
    {
        console.log(err);
    }
}

function prepareWomenDropdown(category)
{
    try
    {
        var dropdownDiv = $('#dropdown');

        var mainDiv = $('<div>', {
            class: 'col-12 d-flex',
            id: 'womenDropdownInnerDiv'
        });
        dropdownDiv.append(mainDiv);

        var indianAndFusionWearDiv = $('<div>', {
            class: 'dropdown-header col-2 mx-3 p-l-25'
        }).append('Indian & Fusion Wear');
        mainDiv.append(indianAndFusionWearDiv);
        for (var i = 0; i < category.indianAndFusionwear.length; i++)
        {
            indianAndFusionWearDiv.append('<li class="dropdown-item px-0">' + category.indianAndFusionwear[i] + '</li>');
        }
        var divider = $('<div>', {
            class: 'dropdown-divider'
        });
        indianAndFusionWearDiv.append(divider);
        var beltsScarves = $('<div>', {
            class: 'py-2'
        }).append('Belts, Scarves & More');
        indianAndFusionWearDiv.append(beltsScarves);
        var watchesAndWearable = $('<div>', {
            class: 'py-2'
        }).append('Watches & Wearables');
        indianAndFusionWearDiv.append(watchesAndWearable);

        var westernWearMainDiv = $('<div>', {
            class: 'dropdown-header col-2 mx-3'
        }).append('Western Wear');
        mainDiv.append(westernWearMainDiv);
        for (var i = 0; i < category.westernWear.length; i++)
        {
            westernWearMainDiv.append('<li class="dropdown-item px-0">' + category.westernWear[i] + '</li>');
        }
        westernWearMainDiv.append($('<div>', {
            class: 'dropdown-divider'
        }));
        var plusSize = $('<div>', {
            class: 'py-2'
        }).append('Plus Size');
        westernWearMainDiv.append(plusSize);

        var maternityDiv = $('<div>', {
            class: 'dropdown-header col-2 mx-3'
        }).append('Maternity');
        mainDiv.append(maternityDiv);
        var sunglassesAndFrames = $('<div>', {
            class: 'dropdown-header col-2 px-0 py-2'
        }).append('Sunglasses & Flrames');
        maternityDiv.append(sunglassesAndFrames);
        var footWears = $('<div>', {
            class: 'dropdown-header col-2 px-0 py-0'
        }).append('Footwear');
        maternityDiv.append(footWears);
        for (var i = 0; i < category.footwear.length; i++)
        {
            footWears.append('<li class="dropdown-item px-0">' + category.footwear[i] + '</li>');
        }
        maternityDiv.append($('<div>', {
            class: 'dropdown-divider'
        }));
        var sportsWearMainDiv = $('<div>', {
            class: 'dropdown-header col-2 px-0'
        }).append('Sports & Active Wear');
        maternityDiv.append(sportsWearMainDiv);
        for (var i = 0; i < category.sportsAndActiveWear.length; i++)
        {
            sportsWearMainDiv.append('<li class="dropdown-item px-0">' + category.sportsAndActiveWear[i] + '</li>');
        }

        var lingerieAndSleepwearDiv = $('<div>', {
            class: 'dropdown-header col-2 mx-4'
        }).append('Lingerie & Sleepwear');
        mainDiv.append(lingerieAndSleepwearDiv);
        for (var i = 0; i < category.lingerieAndSleepwear.length; i++)
        {
            lingerieAndSleepwearDiv.append('<li class="dropdown-item px-0">' + category.lingerieAndSleepwear[i] + '</li>');
        }
        lingerieAndSleepwearDiv.append($('<div>', {
            class: 'dropdown-divider'
        }));
        var beautyMainDiv = $('<div>', {
            class: 'dropdown-header col-2 px-0'
        }).append('Beauty And Personal Care');
        lingerieAndSleepwearDiv.append(beautyMainDiv);
        for (var i = 0; i < category.BeautyAndPersonalCare.length; i++)
        {
            beautyMainDiv.append('<li class="dropdown-item px-0">' + category.BeautyAndPersonalCare[i] + '</li>');
        }

        var gadgetsMainDiv = $('<div>', {
            class: 'dropdown-header col-2 px-0'
        }).append('Gadgets');
        mainDiv.append(gadgetsMainDiv);
        for (var i = 0; i < category.gadgets.length; i++)
        {
            gadgetsMainDiv.append('<li class="dropdown-item px-0">' + category.gadgets[i] + '</li>');
        }
        gadgetsMainDiv.append($('<div>', {
            class: 'dropdown-divider'
        }));
        var jwelleryMainDiv = $('<div>', {
            class: 'dropdown-header col-2 px-0 mx-2'
        }).append('Fashion Accessories');
        gadgetsMainDiv.append(jwelleryMainDiv);
        for (var i = 0; i < category.jewellery.length; i++)
        {
            jwelleryMainDiv.append('<li class="dropdown-item px-0">' + category.jewellery[i] + '</li>');
        }
        gadgetsMainDiv.append($('<div>', {
            class: 'dropdown-divider'
        }));
        gadgetsMainDiv.append($('<div>', {
            class: 'py-2'
        }).append('Backpacks'));
        gadgetsMainDiv.append($('<div>', {
            class: 'py-2'
        }).append('Handbags, Bags & Wallets'));
        gadgetsMainDiv.append($('<div>', {
            class: 'py-2'
        }).append('Luggages & Trolleys'));
    }
    catch (err)
    {
        console.log(err);
    }
}

function prepareKidsDropdown(category)
{
    try
    {
        var dropdownDiv = $('#dropdown');

        var mainDiv = $('<div>', {
            class: 'col-12 d-flex',
            id: 'womenDropdownInnerDiv'
        });
        dropdownDiv.append(mainDiv);

        var boysClothingDiv = $('<div>', {
            class: 'dropdown-header col-2 mx-3 p-l-25'
        }).append('Boys Clothing');
        mainDiv.append(boysClothingDiv);
        for (var i = 0; i < category.boysClothing.length; i++)
        {
            boysClothingDiv.append('<li class="dropdown-item px-0">' + category.boysClothing[i] + '</li>');
        }

        var girlsClothingDiv = $('<div>', {
            class: 'dropdown-header col-2 mx-3'
        }).append('Girl Clothing');
        mainDiv.append(girlsClothingDiv);
        for (var i = 0; i < category.girlsClothing.length; i++)
        {
            girlsClothingDiv.append('<li class="dropdown-item px-0">' + category.girlsClothing[i] + '</li>');
        }

        var footwearFiv = $('<div>', {
            class: 'dropdown-header col-2 mx-3'
        }).append('Footwear');
        mainDiv.append(footwearFiv);
        for (var i = 0; i < category.footwear.length; i++)
        {
            footwearFiv.append('<li class="dropdown-item px-0">' + category.footwear[i] + '</li>');
        }
        footwearFiv.append($('<div>', {
            class: 'dropdown-divider'
        }));
        var toysAndGamesDiv = $('<div>', {
            class: 'dropdown-header col-2 px-0'
        }).append('Toys & Games');
        footwearFiv.append(toysAndGamesDiv);
        for (var i = 0; i < category.toysAndGames.length; i++)
        {
            toysAndGamesDiv.append('<li class="dropdown-item px-0">' + category.toysAndGames[i] + '</li>');
        }

        var infantsDiv = $('<div>', {
            class: 'dropdown-header col-2 mx-4'
        }).append('Infants');
        mainDiv.append(infantsDiv);
        for (var i = 0; i < category.infants.length; i++)
        {
            infantsDiv.append('<li class="dropdown-item px-0">' + category.infants[i] + '</li>');
        }
        infantsDiv.append($('<div>', {
            class: 'dropdown-divider'
        }));
        infantsDiv.append($('<div>', {
            class: 'py-2'
        }).append('Home & Bath'));
        infantsDiv.append($('<div>', {
            class: 'py-2'
        }).append('Personal Care'));


        var kidsAccessoriesDiv = $('<div>', {
            class: 'dropdown-header col-2 px-0'
        }).append('Kids Accessories');
        mainDiv.append(kidsAccessoriesDiv);
        for (var i = 0; i < category.kidsAccessories.length; i++)
        {
            kidsAccessoriesDiv.append('<li class="dropdown-item px-0">' + category.kidsAccessories[i] + '</li>');
        }
        kidsAccessoriesDiv.append($('<div>', {
            class: 'dropdown-divider'
        }));
        var brandsMainDiv = $('<div>', {
            class: 'dropdown-header col-2 px-0 mx-2'
        }).append('Brands');
        kidsAccessoriesDiv.append(brandsMainDiv);
        for (var i = 0; i < category.brands.length; i++)
        {
            brandsMainDiv.append('<li class="dropdown-item px-0">' + category.brands[i] + '</li>');
        }
    }
    catch (err) {
        console.log(err);
    }
}

function prepareHomeAndLivingDropdown(category)
{
    try
    {
        var dropdownDiv = $('#dropdown');

        var mainDiv = $('<div>', {
            class: 'col-12 d-flex',
            id: 'womenDropdownInnerDiv'
        });
        dropdownDiv.append(mainDiv);

        var bedsLinenAndFurnishingDiv = $('<div>', {
            class: 'dropdown-header col-2 mx-3 p-l-25'
        }).append('Beds Linen & Furnishing');
        mainDiv.append(bedsLinenAndFurnishingDiv);
        for (var i = 0; i < category.bedLinenAndFurnishing.length; i++)
        {
            bedsLinenAndFurnishingDiv.append('<li class="dropdown-item px-0">' + category.bedLinenAndFurnishing[i] + '</li>');
        }
        bedsLinenAndFurnishingDiv.append($('<div>', {
            class: 'dropdown-divider'
        }));
        var flooringDiv = $('<div>', {
            class: 'dropdown-header col-2 px-0'
        }).append('Flooring');
        bedsLinenAndFurnishingDiv.append(flooringDiv);
        for (var i = 0; i < category.flooring.length; i++)
        {
            flooringDiv.append('<li class="dropdown-item px-0">' + category.flooring[i] + '</li>');
        }

        var bathDiv = $('<div>', {
            class: 'dropdown-header col-2 mx-3'
        }).append('Bath');
        mainDiv.append(bathDiv);
        for (var i = 0; i < category.bath.length; i++)
        {
            bathDiv.append('<li class="dropdown-item px-0">' + category.bath[i] + '</li>');
        }
        bathDiv.append($('<div>', {
            class: 'dropdown-divider'
        }));
        var lampsAndLightingDiv = $('<div>', {
            class: 'dropdown-header col-2 px-0'
        }).append('Lamps & Lighting');
        bathDiv.append(lampsAndLightingDiv);
        for (var i = 0; i < category.lampsAndLighting.length; i++)
        {
            lampsAndLightingDiv.append('<li class="dropdown-item px-0">' + category.lampsAndLighting[i] + '</li>');
        }

        var homeDecorDiv = $('<div>', {
            class: 'dropdown-header col-2 mx-4'
        }).append('Home Decor');
        mainDiv.append(homeDecorDiv);
        for (var i = 0; i < category.homeDecor.length; i++)
        {
            homeDecorDiv.append('<li class="dropdown-item px-0">' + category.homeDecor[i] + '</li>');
        }
        homeDecorDiv.append($('<div>', {
            class: 'dropdown-divider'
        }));
        homeDecorDiv.append($('<div>', {
            class: 'py-2'
        }).append('Cushions & Cushion Covers'));
        homeDecorDiv.append($('<div>', {
            class: 'py-2'
        }).append('Curtains'));

        var homeGiftsSetsDiv = $('<div>', {
            class: 'py-2 mx-4 dropdown-header col-2'
        }).append('Home Gift Sets');
        mainDiv.append(homeGiftsSetsDiv);
        var kitchenAndTableDiv = $('<div>', {
            class: 'dropdown-header col-2 px-0'
        }).append('Kitchen & Table');
        homeGiftsSetsDiv.append(kitchenAndTableDiv);
        for (var i = 0; i < category.kitchenAndTable.length; i++)
        {
            kitchenAndTableDiv.append('<li class="dropdown-item px-0">' + category.kitchenAndTable[i] + '</li>');
        }
        homeGiftsSetsDiv.append($('<div>', {
            class: 'dropdown-divider'
        }));
        var storageDiv = $('<div>', {
            class: 'dropdown-header col-2 px-0'
        }).append('Storage');
        homeGiftsSetsDiv.append(storageDiv);
        for (var i = 0; i < category.storage.length; i++)
        {
            storageDiv.append('<li class="dropdown-item px-0">' + category.storage[i] + '</li>');
        }

        var brandsDiv = $('<div>', {
            class: 'dropdown-header col-2 px-0 mx-3'
        }).append('Brands');
        mainDiv.append(brandsDiv);
        for (var i = 0; i < category.Brands.length; i++)
        {
            brandsDiv.append('<li class="dropdown-item px-0">' + category.Brands[i] + '</li>');
        }
    }
    catch (err) {
        console.log(err);
    }
}

function prepareBeautyDropdown(category)
{
    try
    {
        var dropdownDiv = $('#dropdown');

        var mainDiv = $('<div>', {
            class: 'col-12 d-flex',
            id: 'womenDropdownInnerDiv'
        });
        dropdownDiv.append(mainDiv);

        var makeupDiv = $('<div>', {
            class: 'dropdown-header col-2 mx-3 p-l-25'
        }).append('Makeup');
        mainDiv.append(makeupDiv);
        for (var i = 0; i < category.makeup.length; i++)
        {
            makeupDiv.append('<li class="dropdown-item px-0">' + category.makeup[i] + '</li>');
        }

        var skinCareDiv = $('<div>', {
            class: 'dropdown-header col-2 mx-2'
        }).append('Skincare, Bath & Body');
        mainDiv.append(skinCareDiv);
        for (var i = 0; i < category.skincareBathAndBody.length; i++)
        {
            skinCareDiv.append('<li class="dropdown-item px-0">' + category.skincareBathAndBody[i] + '</li>');
        }
        skinCareDiv.append($('<div>', {
            class: 'dropdown-divider'
        }));
        skinCareDiv.append($('<div>', {
            class: 'py-2'
        }).append('Baby Care'));
        skinCareDiv.append($('<div>', {
            class: 'py-2'
        }).append('Masks'));


        var hairCareDiv = $('<div>', {
            class: 'dropdown-header col-2 mx-3'
        }).append('Haircare');
        mainDiv.append(hairCareDiv);
        for (var i = 0; i < category.hairCare.length; i++)
        {
            hairCareDiv.append('<li class="dropdown-item px-0">' + category.hairCare[i] + '</li>');
        }
        hairCareDiv.append($('<div>', {
            class: 'dropdown-divider'
        }));
        var fragranceDiv = $('<div>', {
            class: 'dropdown-header col-2 px-0'
        }).append('Fragrances');
        hairCareDiv.append(fragranceDiv);
        for (var i = 0; i < category.fragrances.length; i++)
        {
            fragranceDiv.append('<li class="dropdown-item px-0">' + category.fragrances[i] + '</li>');
        }

        var appliancesDiv = $('<div>', {
            class: 'dropdown-header col-2 mx-2'
        }).append('Appliances');
        mainDiv.append(appliancesDiv);
        for (var i = 0; i < category.appliances.length; i++)
        {
            appliancesDiv.append('<li class="dropdown-item px-0">' + category.appliances[i] + '</li>');
        }
        appliancesDiv.append($('<div>', {
            class: 'dropdown-divider'
        }));
        var mensGroomingDiv = $('<div>', {
            class: 'dropdown-header col-2 px-0'
        }).append('Mens Grooming');
        appliancesDiv.append(mensGroomingDiv);
        for (var i = 0; i < category.mensGrooming.length; i++)
        {
            mensGroomingDiv.append('<li class="dropdown-item px-0">' + category.mensGrooming[i] + '</li>');
        }
        var beautyGiftsDiv = $('<div>', {
            class: 'dropdown-header col-2 px-0'
        }).append('Beauty Gift & Makeup Set');
        appliancesDiv.append(beautyGiftsDiv);
        for (var i = 0; i < category.beautyGiftAndMakeupSet.length; i++)
        {
            beautyGiftsDiv.append('<li class="dropdown-item px-0">' + category.beautyGiftAndMakeupSet[i] + '</li>');
        }
        appliancesDiv.append($('<div>', {
            class: 'py-2'
        }).append('Premium Beauty'));
        appliancesDiv.append($('<div>', {
            class: 'py-2'
        }).append('Wellness & Hygiene'));


        var topBrandsDiv = $('<div>', {
            class: 'dropdown-header col-2 mx-4'
        }).append('Top Brands');
        mainDiv.append(topBrandsDiv);
        for (var i = 0; i < category.topBrands.length; i++)
        {
            topBrandsDiv.append('<li class="dropdown-item px-0">' + category.topBrands[i] + '</li>');
        }
    }
    catch (err) {
        console.log(err);
    }
}

function prepareStudioDropdown()
{
    try
    {
        var dropdownDiv = $('#dropdown');

        var mainDiv = $('<div>', {
            class: 'col-12 d-block'
        });
        dropdownDiv.append(mainDiv);

        var studioDiv = $('<div>', {
            class: 'fs-2 text-center'
        }).append('Studio');
        mainDiv.append(studioDiv);

        var subDiv = $('<div>', {
            class: 'text-center'
        }).append('Your daily inspiration for everything fashion');
        mainDiv.append(subDiv);

        var imageDiv = $('<div>', {
            class: 'd-flex justify-content-center'
        }).append($('<img>', {
            src: 'assets/image/tree-736885_1280.jpg',
            alt: 'studio',
            class: 'img-fluid w-75',
            style: 'border-radius: 10px; height: 320px'
        }));

        var buttonDiv = $('<div>', {
            class: 'text-center'
        }).append($('<button>', {
            class: 'btn btn-outline-dark mt-3',
            type: 'button',
            text: 'Explore Studio'
        }));
        mainDiv.append(imageDiv);
        mainDiv.append(buttonDiv);
    }
    catch (e)
    {
        console.log(e);
    }
}

function prepareProfileDropdown() {
    try
    {
        var dropdownDiv = $('#profileDropdown');
        dropdownDiv.empty();
        var mainDiv = $('<div>', {
            class: 'col-12 mx-3 my-2',
            style: 'width: 300px'
        });
        dropdownDiv.append(mainDiv);

        var welcomeDiv = $('<div>', {
            class: 'd-block'
        }).append($('<span>', {
            class: 'd-block p-0 font-b'
        }).append("Welcome")).append($('<span>', {
            class: 'd-block p-0 text-muted'
        }).append("To access account and manage orders"));
        mainDiv.append(welcomeDiv);

        var loginButton = $('<div>', {
            class: 'py-2',
        }).append($('<button>', {
            class: 'btn btn-outline-dark align-items-center',
            type: 'button',
            text: 'LOGIN / SIGNUP',
            id: 'signinSignupBtn'
        }));
        mainDiv.append(loginButton);

        var divider = $('<div>', {
            class: 'dropdown-divider'
        });
        mainDiv.append(divider);

        var manageAccountOptions = $('<div>', {
            class: '',
            id:'manageAccountOptions'
        });
        mainDiv.append(manageAccountOptions);

        var option1 = $('<div>', {
            class: ''
        }).append($('<a>', {
            class: 'text-muted',
            text: 'Orders',
            href: '#',
            style: 'font-size: 14px !important'
        })).append($('<div>', {
            class: 'py-1'
        }).append($('<a>', {
            class: 'text-muted',
            text: 'Wishlist',
            href: '#',
            style: 'font-size: 14px !important'
        }))).append($('<div>', {
            class: ''
        }).append($('<a>', {
            class: 'text-muted',
            text: 'Gift Card',
            href: '#',
            style: 'font-size: 14px !important'
        }))).append($('<div>', {
            class: ''
        }).append($('<a>', {
            class: 'py-1 text-muted',
            text: 'Contact us',
            href: '#',
            style: 'font-size: 14px !important'
        }))).append($('<div>', {
            class: 'p-b-10'
        }).append($('<a>', {
            class: 'text-muted',
            text: 'Insider',
            href: '#',
            style: 'font-size: 14px !important'
        })));
        manageAccountOptions.append(option1);

        var option2 = $('<div>', {
            class: 'border-top py-2'
        }).append($('<a>', {
            class: ' text-muted',
            text: 'Credits',
            href: '#',
            style: 'font-size: 14px !important'
        })).append($('<div>', {
            class: 'py-1'
        }).append($('<a>', {
            class: 'text-muted',
            text: 'Coupons',
            href: '#',
            style: 'font-size: 14px !important'
        }))).append($('<div>', {
            class: ''
        }).append($('<a>', {
            class: ' text-muted',
            text: 'Saved Card',
            href: '#',
            style: 'font-size: 14px !important'
        }))).append($('<div>', {
            class: ''
        }).append($('<a>', {
            class: 'py-1 text-muted',
            text: 'Saved VPA',
            href: '#',
            style: 'font-size: 14px !important'
        }))).append($('<div>', {
            class: 'p-b-10'
        }).append($('<a>', {
            class: 'text-muted',
            text: 'Saved Addresses',
            href: '#',
            style: 'font-size: 14px !important'
        })));
        manageAccountOptions.append(option2);
    }
    catch (e)
    {
        console.log(e);
    }
}

function prepareShopByCategoryCard(cardData)
{
    try
    {
        var cardDiv = $('#shopByCategoryCard');
        for(var i = 0; i < cardData.length; i++)
        {
            var card = cardData[i];
            var mainDiv = $('<div>', {
                class: 'd-flex categoryCard border justify-content-center',
                id: card.id
            }).append($('<img>', {
                src: card.image,
                alt: card.name,
                class: 'img-fluid position-absolute justify-content-center text-center',
            })).append($('<div>', {
                class: "bg-danger z-1000 container position-relative text-center",
                id: card.id,
                style: 'height: 5rem; width: 10rem; bottom: -165px;'
            }).append($('<span>', {
                class: 'text-center',
                text: "Footwear"
            })));
            cardDiv.append(mainDiv);
        }
    }
    catch(e)
    {
        console.log(e);
    }
}

$('body').on('click','#dropdown a', function() {
    var clickedItemText = $(this).text();
    switch(clickedItemText) {
        case 'T-Shirts':
            window.location.href = 'www.google.com';
            break;
        case 'Topwear':
            window.location.href = 'www.google.com';
            break;
        case 'Bottomwear':
            window.location.href = 'www.google.com';
            break;
        default:
            break;
    }
});