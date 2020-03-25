
        var aluno=prompt("Qual seu nome?");
        var nota1 = prompt("Nota 1");
        var nota2 = prompt("Nota 2");
        var nota3 = prompt("Nota 3");
        
        notaf1 = parseFloat(nota1);
        notaf2 = parseFloat(nota2);
        notaf3 = parseFloat(nota3);
        
        notaFinal = (notaf1 + notaf2 + notaf3) / 3;
        
        alert("Nota final " + "(" + aluno + "): " + notaFinal);
        