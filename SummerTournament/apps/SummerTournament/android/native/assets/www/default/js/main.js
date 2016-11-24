
/* JavaScript content from js/main.js in folder common */
function wlCommonInit(){
	/*
	 * Use of WL.Client.connect() API before any connectivity to a Worklight Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the Worklight Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Common initialization code goes here
	
}
var imagesTotal=8;
var currentImage=1;
var thumbsTotalWidth=0;

$('a.galleryBullet'+currentImage).addClass("active");
$('a.thumbnailsimage'+currentImage).addClass("active");
$(window).load(function(){
	$('.galleryThumbnails a img').each(function(){
		thumbsTotalWidth+=$(this).width()+10+8;
	});
	$('.galleryThumbnails').width(thumbsTotalWidth);
});


$('a.previousSlideArrow').click(function(){
	$('img.previewimage'+currentImage).hide();
	$('a.galleryBullet'+currentImage).removeClass("active");
	$('a.thumbnailsimage'+currentImage).removeClass("active");
	currentImage--;
	if(currentImage==0){
		currentImage=imagesTotal;
	}
	$('img.previewimage'+currentImage).show();
	$('a.galleryBullet'+currentImage).addClass("active");
	$('a.thumbnailsimage'+currentImage).addClass("active");
	return false;
});

$('a.nextSlideArrow').click(function(){
	$('img.previewimage'+currentImage).hide();
	$('a.galleryBullet'+currentImage).removeClass("active");
	$('a.thumbnailsimage'+currentImage).removeClass("active");
	currentImage++;
	if(currentImage==imagesTotal+1){
		currentImage=1;
	}
	$('img.previewimage'+currentImage).show();
	$('a.galleryBullet'+currentImage).addClass("active");
	$('a.thumbnailsimage'+currentImage).addClass("active");
	return false;
});

function changeimage(imageNumber){
	$('img.previewimage'+currentImage).hide();
	currentImage=imageNumber;
	$('img.previewimage'+currentImage).show();
	
	
	$('.galleryNavigationBullets a').removeClass("active");
	$('.galleryThumbnails a'+currentImage).removeClass("active");
	
	$('a.galleryBullet'+imageNumber).addClass("active");
	$('a.thumbnailsimage'+currentImage).addClass("active");
	
	
}

function autoChangeSlides(){
	
	$('img.previewimage'+currentImage).hide();
	$('a.galleryBullet'+currentImage).removeClass("active");
	$('a.thumbnailsimage'+currentImage).removeClass("active");
	currentImage++;
	if(currentImage==imagesTotal+1){
		currentImage=1;
	}
	$('img.previewimage'+currentImage).show();
	$('a.galleryBullet'+currentImage).addClass("active");
	$('a.thumbnailsimage'+currentImage).addClass("active");
	
}

var slideTimer=setInterval(function (){autoChangeSlides();},3000);

/* JavaScript content from js/main.js in folder android */
// This method is invoked after loading the main HTML and successful initialization of the Worklight runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}