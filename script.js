const starsContainer = document.querySelector('.stars');

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 25 + 10; // Tamanho aleatório
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`; // Duração aleatória

    starsContainer.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 5000); // Remove a estrela após 5 segundos
}

// Aumenta a quantidade de estrelas na tela
for (let i = 0; i < 100; i++) {
    createStar();
}

// Cria novas estrelas a cada 200ms
setInterval(createStar, 200);

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o envio do formulário

    const passwordInput = document.getElementById('password');
    const hint = document.getElementById('hint');
    const loginContainer = document.querySelector('.login-container');

    if (passwordInput.value !== '040724') {
        passwordInput.classList.add('shake');
        hint.textContent = "*Dica da senha: A senha do seu telefone";
        hint.style.display = 'block';

        setTimeout(() => {
            passwordInput.classList.remove('shake');
        }, 500);
    } else {
        // Oculta o formulário
        loginContainer.style.display = 'none';
        document.body.style.backgroundColor = 'black'; // Fundo preto

        // Inicia a animação dos pontos
        createHearts();
    }
});

function createHearts() {
    const points = [];

    // Gera 100 pontos
    for (let i = 0; i < 100; i++) {
        const point = document.createElement('div');
        point.classList.add('point');
        point.style.left = `${Math.random() * 100}vw`;
        point.style.top = `${Math.random() * 100}vh`;
        starsContainer.appendChild(point);
        points.push(point);
    }

    // Após um segundo, inicia a animação de formar um coração
    setTimeout(() => {
        points.forEach(point => {
            point.classList.add('heart');
            point.style.transition = 'all 1s ease-in-out';
            point.style.left = '50vw'; // Move para o centro
            point.style.top = '50vh'; // Move para o centro
        });

        // Após a animação, remove os pontos e mostra a mensagem
        setTimeout(() => {
            points.forEach(point => point.remove());
            showMessage("Eu te amo minha princesa, eu te amo."); // Mostra a mensagem depois da animação
        }, 2000);
    }, 1000);
}

function showMessage(message) {
    const textElement = document.createElement('div');
    textElement.className = 'message';
    starsContainer.appendChild(textElement);

    let index = 0;
    const interval = setInterval(() => {
        if (index < message.length) {
            textElement.textContent += message[index];
            index++;
        } else {
            clearInterval(interval);
            showHeart(); // Chama a função para mostrar o coração
            setTimeout(showRB, 1000); // Adiciona um atraso antes de mostrar R+B
        }
    }, 200); // Velocidade de digitação
}

function showHeart() {
    const heartElement = document.createElement('div');
    heartElement.className = 'heart-message';
    heartElement.innerHTML = '<span class="heart-symbol">&#10084;</span>'; // Coração
    starsContainer.appendChild(heartElement);
}

function showRB() {
    const rbElement = document.createElement('div');
    rbElement.className = 'rb-message';
    starsContainer.appendChild(rbElement);

    // Animação de digitação para R+B
    let rbIndex = 0;
    const rbMessage = '<span class="marsala">R</span> <span class="white">+</span> <span class="pink">B</span>';
    const intervalRB = setInterval(() => {
        if (rbIndex < rbMessage.length) {
            rbElement.innerHTML += rbMessage[rbIndex];
            rbIndex++;
        } else {
            clearInterval(intervalRB);
        }
    }, 200); // Velocidade de digitação
}
