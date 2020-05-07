        var sujeito1=prompt("Digite sua opção: " + "\n" + "Pedra | Papel | Tesoura");
        
        if ((sujeiro1 != "Pedra") || (sujeiro1 != "Papel" || (sujeiro1 != "Tesoura"))
            {
            alert("OPÇÃO INVÁLIDA");
            }else {
        
                var min = Math.ceil(min);
                var max = Math.floor(max);

                var resultado = Math.floor(Math.random() * 3);

                /* 0 = Pedra
                   1 = Papel
                   2 = Tesoura */

                if(sujeito1 == "Pedra" && resultado == 0){
                    alert("Você é " + sujeito1 + "\n" + "RESULTADO: " + "Empate");
                }else if (sujeito1 == "Papel" && resultado == 0){
                    alert("Você é " + sujeito1 + "\n" + "RESULTADO: " + "Papel Cobre Pedra");
                }else if (sujeito1 == "Tesoura" && resultado == 0){
                    alert("Você é " + sujeito1 + "\n" + "RESULTADO: " + "Pedra quebra tesoura");
                }


                if(sujeito1 == "Pedra" && resultado == 1){
                    alert("Você é " + sujeito1 + "\n" + "RESULTADO: " + "Papel Cobre Pedra");
                }else if (sujeito1 == "Papel" && resultado == 1){
                    alert("Você é " + sujeito1 + "\n" + "RESULTADO: " + "Empate");
                }else if (sujeito1 == "Tesoura" && resultado == 1){
                    alert("Você é " + sujeito1 + "\n" + "RESULTADO: " + "Tesoura corta papel");
                }

                if(sujeito1 == "Pedra" && resultado == 2){
                    alert("Você é " + sujeito1 + "\n" + "RESULTADO: " + "Pedra quebra tesoura");
                }else if (sujeito1 == "Papel" && resultado == 2){
                    alert("Você é " + sujeito1 + "\n" + "RESULTADO: " + "Tesoura corta papel");
                }else if (sujeito1 == "Tesoura" && resultado == 2){
                    alert("Você é " + sujeito1 + "\n" + "RESULTADO: " + "Empate");
                }
            }
