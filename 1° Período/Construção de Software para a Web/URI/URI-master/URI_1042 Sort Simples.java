/*
+--------------------+
| Rodrigo CavanhaMan |
|        IFTM        |
|      URI 1042      |
+--------------------+
*/
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var line1 = lines[0].split(' ');
		
		var a,b,c,aux1,aux2,aux3;
		a = Number(line1[0]);
		b = Number(line1[1]);
		c = Number(line1[2]);

		aux1 = Math.min(a, Math.min(b, c));
		aux2 = Math.min(a, b);
		aux3 = Math.max(a, b);
		
		if (aux1 == a){
			aux2 = Math.min(b, c);
			aux3 = Math.max(b, c);
		}
		if (aux1 == b){
			aux2 = Math.min(a, c);
			aux3 = Math.max(a, c);
		}
		if (aux1 == c){
			aux2 = Math.min(a, b);
			aux3 = Math.max(a, b);
		}
		
		console.log(aux1);
		console.log(aux2);
		Sconsole.log(aux3);

		console.log("");

		console.log(a);
		console.log(b);
		console.log(c);
		
	}
}

