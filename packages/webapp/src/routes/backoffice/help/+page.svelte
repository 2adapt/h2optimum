<script>
	let questions = [
		{
			q: 'Como selecionar o período de visualização dos dados?',
			a: 'Na barra superior, poderá selecionar o período que quer visualizar os dados observados, desde o início da instalação até ao dado mais recente.'
		},
		{
			q: 'Posso agregar os dados visualizados?',
			a: 'Quando estiver a visualizar os dados, para atenuar a variabilidade dos dados, poderá optar por vê-los agregados em valores médios de 3h, 6h, 12h ou 24h.'
		},
		{
			q: 'Como posso alterar algumas das informações da minha instalação?',
			a: 'No menu lateral esquerdo, em “Instalações”, poderá editar o “nome”, a “descrição”, o “tipo de solo”, a “localização” e o “estado” da(s) sua(s) instalação(cões).'
		},
		{
			q: 'Como alterar o nome dos meus dispositivos?',
			a: 'No quadro dos “Dispositivos”, nos três pontos à frente do nome de cada um deles poderá editar a “descrição” e gravar.'
		},
		{
			q: 'Posso partilhar os meus dados?',
			a: 'No quadro “Sumário” poderá copiar o “link público” com quem quiser. Este link dá permissões apenas de visualização da monitorização da sua instalação, ou seja, não permite editar as informações.'
		},
		{
			q: 'Porque é importante o tipo de solo?',
			a: 'Dependendo da quantidade de areia, limo e argila, existem três tipos de solo mais comuns, arenoso, siltoso e argiloso a que se pode adicionar um quarto tipo dependente da quantidade de matéria orgânica, solo húmico. O tipo de solo influência as variáveis monitorizadas como a temperatura e, sobretudo, o potencial hídrico porque os solos com partículas mais pequenas (limo e argila) têm uma área de superfície maior do que os solos com partículas maiores (areia) o que permite que retenham mais água. Por outras palavras, um solo fino com uma elevada percentagem de partículas de limo, tem uma maior capacidade de retenção de água. Por isso, dependendo do tipo de solo que se está a monitorizar, as classes de humidade de solo (encharcado, húmido ou seco) variam.'
		},
		{
			q: 'Para que serve a temperatura?',
			a: 'A temperatura do solo serve sobretudo para calibrar os sensores que medem o potencial hídrico do solo. No entanto, normalmente é medida a temperatura da caixa que está ao ar e pode ser interessante analisar o diferencial entre a temperatura do solo e do ar. Para além disso, a temperatura influência os mecanismos de evapotranspiração e de desenvolvimento das plantas, afetando processos-chave como germinação, crescimento e fotossíntese uma vez que cada espécie tem uma faixa térmica ótima. A monitorização poderá alertar para variações extremas podem causar stresse térmico, prejudicando a saúde das plantas alterando as taxas de eficiência da fotossíntese e influenciam os ciclos de floração e frutificação. O equilíbrio térmico é crucial para o sucesso do cultivo, garantindo colheitas produtivas e plantas resilientes às variações meteorológicas.'
		},
		{
			q: 'O que é o potencial hídrico?',
			a: 'O potencial hídrico do solo é uma medida da energia livre da água que determina os movimentos da água que se desloca sempre de zonas com potenciais hídricos mais altos para zonas com potenciais hídricos mais baixos. É uma combinação de diferentes componentes que incluem o i) potencial matricial - relacionado com a aderência da água às partículas do solo, influenciando a capacidade de retenção de água; ii) potencial de pressão - relacionado com a pressão exercida pela água no solo devido à gravidade e o iii) potencial osmótico - relacionado com a presença de solutos dissolvidos na água do solo, afetando a capacidade da água de ser absorvida pelas raízes das plantas. O potencial hídrico do solo é crucial para entender a disponibilidade de água para as plantas e influencia processos como absorção de água pelas raízes e transporte de água nas plantas.'
		},
		{
			q: 'Que sensores são utilizados para medir o potencial hídrico?',
			a: 'É utilizado o sensor de matriz granular Watermark que é essencialmente um bloco de resistência elétrica, cercado por areia de um tamanho específico, contido por uma malha de aço inoxidável. A resistência elétrica do bloco está relacionada com o potencial métrico do solo (a energia que a planta deve exercer para remover a água do solo), expressa em centíbulos (cb). Um potencial próximo de zero indica que o solo está quase saturado e, portanto, quase não é necessária energia para remover a água. À medida que o solo seca devido ao uso ou evaporação da água da planta, as leituras, em centibar (cb), aumentam.'
		}
	];
</script>

<div class="mx-auto max-w-7xl px-6 py-5 sm:py-5 lg:px-8 lg:py-5 w-[80%] overflow-auto">
	<div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
		<h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Perguntas frequentes</h2>
		<dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
			{#each questions as question}
				<div class="pt-6">
					<dt>
						<!-- Expand/collapse question button -->
						<button
							on:click="{() => (question.hidden = !question.hidden)}"
							type="button"
							class="flex w-full items-start justify-between text-left text-gray-900"
							aria-controls="faq-0"
							aria-expanded="false"
						>
							<span class="text-base font-semibold leading-7">{question.q}</span>
							<span class="ml-6 flex h-7 items-center">
								<!--
                Icon when question is collapsed.

                Item expanded: "hidden", Item collapsed: ""
              -->
								<svg
									class:hidden="{question.hidden}"
									class="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path>
								</svg>
								<!--
                Icon when question is expanded.

                Item expanded: "", Item collapsed: "hidden"
              -->
								<svg
									class:hidden="{!question.hidden}"
									class="hidden h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6"></path>
								</svg>
							</span>
						</button>
					</dt>
					<dd class:hidden="{!question.hidden}" class=" hidden mt-2 pr-12" id="faq-0">
						<p class="text-base leading-7 text-gray-600">{question.a}</p>
					</dd>
				</div>
			{/each}
			<!-- More questions... -->
		</dl>
	</div>
</div>
