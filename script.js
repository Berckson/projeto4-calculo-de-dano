/*Escreva um programa que permita inserir o nome e o poder de um ataque de um personagem. Depois, de outro personagem, o nome, a quantidade de pontos de vida, o poder de defesa e se ele possui um escudo, e então calcule a quantidade de dano causado com base nas seguintes regras:

Se o poder de ataque maior do que a defesa e o defensor não possui um escudo, o dano causado será igual à diferença entre o ataque e a defesa.
Se o poder de ataque maior do que a defesa e o defensor possuem um escudo, o dano causado será igual à metade da diferença entre o ataque e a defesa.
Se o poder de ataque for menor ou igual à defesa, o dano causado será 0.
Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de abmos os personagens.

EXEMPLO DE SAÍDA:

Situação 1:
John atacou. Wick sofreu 4 de dano e não possui escudo. Sua vida agora é 6.

Situação 2:
John atacou. Wick sofreu 2 de dano por possuir escudo. Sua vida agora é 8.

Situação 3:
John atacou, mas não afetou Wick. Nenhum dano*/       let perso = prompt('Qual o nome do primeiro personagem')
let perso1 = prompt('Qual o nome do segundo personagem')
let atk = parseInt(prompt(`Qual o poder de ataque do ${perso}`))
let def = parseInt(prompt(`Quanto de defesa o ${perso1}`))
let shield = prompt('Tem ou não tem escudo?')
if(atk > def && shield == 'não tem '){
 alert(`${perso} atacou. ${perso1} sofreu ${atk-def} de dano,sua vida agora é de ${def-(atk-def)}`)
} else if(shield == 'tem') {
 alert(`${perso} atacou. ${perso1} sofreu ${(atk-def)/2} de dano,sua vida agora é de ${def-(atk-def)/2}`)
} else{
 alert(`${perso} atacou mas não afetou ${perso1}.Nenhum dano causado`)
}