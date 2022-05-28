


function profile () {
   upper();
   down();
}



function upper() {
    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
        let data = JSON.parse(this.responseText);

        let blogname = `<h1 class="blog-name pt-lg-4 mb-0">${data.name}</h1>`;
            

        let infobio = `<img class="profile-image mb-3 rounded-circle mx-auto" src="${data.avatar_url}" id="imagemredonda" >`;
    
    
        let myprofile = `<div class="container">
        <div class="profile-teaser row">
            
            <div class="col">
                <h2 class="name font-weight-bold mb-1">${data.name}</h2>
                <div class="tagline mb-3">${data.company}</div>
                <div class="bio mb-4">${data.bio}. As informações dessa página foram extraidas da api do github
                </div><!--//bio-->
                <div class="mb-4">
                    <a class="btn btn-primary me-2 mb-3" href="https://github.com/FernandoValentim43"   target="blank" >View</span> GitHub</a>
                    <a class="btn btn-secondary mb-3" href="#"><span class="d-none d-md-inline">View</span> Resume</a>
                </div>
            </div>
            <div class="col-md-5 col-lg-5" id="square">
							<img class="profile-pic img-fluid mb-3 mb-lg-0 me-md-0" src="${data.avatar_url}" alt="">
			</div>
            

        </div>`


        

        document.getElementById('imagemredonda').innerHTML = infobio;
      
        document.getElementById('blogname').innerHTML = blogname;
        document.getElementById('cont').innerHTML = myprofile;

       


    }

    xhr.open('GET', 'https://api.github.com/users/fernandovalentim43');
    xhr.send();
}



function down() {
    let xhr = new XMLHttpRequest();


    xhr.onload = function () {
        let data = JSON.parse(this.responseText);


        let data1 = data[0];
        let data2 = data[1];
        let data3 = data[2];


        let repo1 = `
        <div class="col-md-4 mb-5" >
            <div class="card blog-post-card">
                <img class="card-img-top" src="/file/assets/jsimg.png" alt="image">
                <div class="card-body">
                    <h5 class="card-title"><a class="theme-link" href="#">${data1.name}</a></h5>
                    <h6 class="card-title">Topics: ${data1.topics}</h6>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient...</p>
                    <p class="mb-0"><a class="text-link" href="${data1.html_url}" target="blak">Read more →</a></p>
                    
                </div>
                <div class="card-footer">
                    <small class="text-muted">Criado em ${data1.created_at}</small>
                </div>
            </div><!--//card-->
        </div><!--//col-->
    
            <div class="col-md-4 mb-5" >
            <div class="card blog-post-card">
                <img class="card-img-top" src="/file/assets/jsimg.png" alt="image">
                <div class="card-body">
                <h5 class="card-title"><a class="theme-link" href="#">${data2.name}</a></h5>
                <h6 class="card-title">Topics: ${data2.topics}</h6>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient...</p>
                <p class="mb-0"><a class="text-link" href="${data2.html_url}" target="blak">Read more →</a></p>
                    
                </div>
                <div class="card-footer">
                <small class="text-muted">Criado em ${data2.created_at}</small>
                </div>
            </div><!--//card-->
        </div><!--//col-->
        
        <div class="col-md-4 mb-5" >
        <div class="card blog-post-card">
            <img class="card-img-top" src="/file/assets/jsimg.png" alt="image">
            <div class="card-body">
            <h5 class="card-title"><a class="theme-link" href="#">${data3.name}</a></h5>
            <h6 class="card-title">Topics: ${data3.topics}</h6>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient...</p>
            <p class="mb-0"><a class="text-link" href="${data3.html_url}" target="blak">Read more →</a></p>
                
            </div>
            <div class="card-footer">
            <small class="text-muted">Criado em ${data3.created_at}</small>
            </div>
        </div><!--//card-->
    </div><!--//col-->
    `

       document.getElementById('repos').innerHTML = repo1;
   

    }

    xhr.open('GET', 'https://api.github.com/users/fernandovalentim43/repos');
    xhr.send();
}