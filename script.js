const nome = document.getElementById('nome');
const espelhoNome = document.getElementById('espelhoNome');
const contadorNome = document.getElementById('contadorNome');
const estado = document.getElementById('estado');
const cidade = document.getElementById('cidade');
const email = document.getElementById('email');
const emailFeedback = document.getElementById('emailFeedback');
const curso = document.getElementById('curso');
const termos = document.getElementById('termos');
const senha = document.getElementById('senha');
const forcaSenha = document.getElementById('forcaSenha');
const enviar = document.getElementById('enviar');
const erros = document.getElementById('erros');
const form = document.getElementById('cadastroForm');

// Etapa 1: Nome
nome.addEventListener('input', () => {
  espelhoNome.textContent = nome.value;
  contadorNome.textContent = `${nome.value.length}/50`;
  nome.classList.toggle('invalid', nome.value.length > 50);
  validarFormulario();
});

// Etapa 2: Estado → Cidade
const cidadesPorEstado = {
  SP: ['São Paulo', 'Campinas', 'Santos'],
  RJ: ['Rio de Janeiro', 'Niterói', 'Petrópolis']
};

estado.addEventListener('change', () => {
  cidade.innerHTML = '<option value="">Selecione</option>';
  if (estado.value) {
    cidade.disabled = false;
    cidadesPorEstado[estado.value].forEach(c => {
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = c;
      cidade.appendChild(opt);
    });
  } else {
    cidade.disabled = true;
  }
});

// Etapa 3: E-mail
email.addEventListener('focus', () => {
  email.style.borderColor = '#007bff';
});

email.addEventListener('blur', () => {
  const valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
  emailFeedback.textContent = valido ? '' : 'E-mail inválido';
  email.classList.toggle('invalid', !valido);
  validarFormulario();
});

// Etapa 5: Senha
senha.addEventListener('input', () => {
  const val = senha.value;
  let forca = 'Fraca';
  if (val.length >= 8 && /[A-Z]/.test(val) && /\d/.test(val)) {
    forca = 'Forte';
  } else if (val.length >= 6) {
    forca = 'Média';
  }
  forcaSenha.textContent = `Força: ${forca}`;
  forcaSenha.style.color = {
    'Fraca': 'red',
    'Média': 'orange',
    'Forte': 'green'
  }[forca];
  validarFormulario();
});

// Validação geral
function validarFormulario() {
  const errosLista = [];
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);

  if (nome.value.length < 3) errosLista.push('Nome deve ter ao menos 3 caracteres.');
  if (!emailValido) errosLista.push('E-mail inválido.');
  if (!curso.value) errosLista.push('Selecione um curso.');
  if (!termos.checked) errosLista.push('Você deve aceitar os termos.');
  if (senha.value.length < 6) errosLista.push('Senha deve ter ao menos 6 caracteres.');

  erros.innerHTML = '';
  errosLista.forEach(e => {
    const li = document.createElement('li');
    li.textContent = e;
    erros.appendChild(li);
  });

  enviar.disabled = errosLista.length > 0;
}

// Submit com preventDefault
form.addEventListener('submit', (e) => {
  e.preventDefault();
  validarFormulario();
  if (!enviar.disabled) {
    alert('Formulário enviado com sucesso!');
    form.reset();
    espelhoNome.textContent = '';
    contadorNome.textContent = '0/50';
    cidade.disabled = true;
    forcaSenha.textContent = '';
    forcaSenha.style.color = '';
    erros.innerHTML = '';
    emailFeedback.textContent = '';
    enviar.disabled = true;
    document.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
  }
});
