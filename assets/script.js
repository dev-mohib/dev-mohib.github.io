


let mobileDOM = ``
let webAppDOM = ``
let uxDOM = ``
mainContent.map((content, index) => {
    switch(content.category) {
        case 'Mobile':
           mobileDOM += `<div class="row">
                            <div class="col-lg-5 col-md-5 col-sm-5">
                                <!-- Single -->
                                <div class="single-services mb-30">
                                    <img height="250" width="400" src="${content.images[0]}" alt="" style="background-image : cover">
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-7 col-sm-7">
                                <h2 class="h2">${content.title}</h2>
                                <p>${content.description}</p>
                                <p><b>Link</b> <a href="#">Click here</a></p>
                            </div>
                        </div>`
        break
        case 'Web':
            webAppDOM += `<div class="row">
                            <div class="col-lg-5 col-md-5 col-sm-5">
                                <!-- Single -->
                                <div class="single-services mb-30">
                                    <img height="350" src="assets/img/service/services1.png" alt="">
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-7 col-sm-7">
                                <h2 class="h2">${content.title}</h2>
                                <p>${content.description}</p>
                                <p><b>Link</b> <a href="#">Click here</a></p>
                            </div>
                        </div>`
        break
        case 'UX':
            uxDOM += `<div class="row">
                        <div class="col-lg-5 col-md-5 col-sm-5">
                            <!-- Single -->
                            <div class="single-services mb-30">
                                <img height="350" src="assets/img/service/services1.png" alt="">
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-7 col-sm-7">
                            <h2 class="h2">${content.title}</h2>
                            <p>${content.description}</p>
                            <p><b>Link</b> <a href="#">Click here</a></p>
                        </div>
                    </div>`
        break
        default:
            console.log("These projects are uncategorized")
    }
})

document.getElementById('MobileApps').innerHTML = mobileDOM
document.getElementById('WebApps').innerHTML = webAppDOM
document.getElementById('UI-UX').innerHTML = uxDOM