<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SilverCar | Especialistas em Automóveis</title>
    <style>
        /* Paleta de Cores e Reset */
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', sans-serif; }
        :root {
            --preto: #1a1a1a;
            --vermelho: #e63946;
            --branco: #ffffff;
            --prata: #bdc3c7;
        }

        body { background-color: var(--branco); color: var(--preto); }

        /* Cabeçalho */
        header {
            background-color: var(--preto);
            padding: 20px 5%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 1000;
            border-bottom: 3px solid var(--prata);
        }

        .logo { color: var(--branco); font-weight: bold; font-size: 1.5rem; text-transform: uppercase; }
        .logo span { color: var(--prata); }

        .btn-orcamento {
            background-color: var(--vermelho);
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            transition: 0.3s;
        }
        .btn-orcamento:hover { background-color: #b91c1c; transform: scale(1.05); }

        /* Seções */
        section {
            display: flex;
            align-items: center;
            padding: 80px 10%;
            gap: 50px;
        }

        /* Alternância de cores para dar ritmo */
        section:nth-child(even) { background-color: #f4f4f4; flex-direction: row-reverse; }

        .image-placeholder {
            flex: 1;
            background-color: var(--prata);
            height: 350px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            font-weight: bold;
            border: 2px dashed var(--preto);
        }

        .content { flex: 1; }
        .content h2 {
            font-size: 2.5rem;
            color: var(--preto);
            margin-bottom: 20px;
            border-left: 5px solid var(--vermelho);
            padding-left: 15px;
        }
        .content p { line-height: 1.6; font-size: 1.1rem; color: #444; }

        /* Responsividade */
        @media (max-width: 768px) {
            section, section:nth-child(even) { flex-direction: column; padding: 40px 5%; }
            .image-placeholder { width: 100%; height: 250px; }
        }
    </style>
</head>
<body>

    <header>
        <div class="logo">SILVER<span>CAR</span></div>
        <a href="#" class="btn-orcamento">SOLICITE ORÇAMENTO</a>
    </header>

    <section>
        <div class="image-placeholder">Espaço para Imagem 01</div>
        <div class="content">
            <h2>Nossa Frota Premium</h2>
            <p>Conheça os veículos mais exclusivos do mercado. Na SilverCar, priorizamos o desempenho e o conforto, oferecendo apenas o que há de melhor no setor automotivo mundial.</p>
        </div>
    </section>

    <section>
        <div class="image-placeholder">Espaço para Imagem 02</div>
        <div class="content">
            <h2>Manutenção Especializada</h2>
            <p>Sua segurança é nossa prioridade. Contamos com uma equipe técnica altamente qualificada e equipamentos de ponta para garantir que seu carro esteja sempre em estado de novo.</p>
        </div>
    </section>

    <section>
        <div class="image-placeholder">Espaço para Imagem 03</div>
        <div class="content">
            <h2>Atendimento Exclusivo</h2>
            <p>Na SilverCar, cada cliente é único. Oferecemos consultoria personalizada para ajudar você a encontrar o veículo dos seus sonhos com as melhores condições do mercado.</p>
        </div>
    </section>

</body>
</html>