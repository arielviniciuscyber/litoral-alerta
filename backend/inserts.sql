-- usuário autor das notícias
INSERT INTO `usuario` (`username`, `nome`, `email`, `tipo`) 
VALUES ('redacao', 'Redação Litoral Alerta', 'redacao@litoralalerta.com', 'admin');

-- notícias
INSERT INTO `publicacao` (`resumo`, `slug`, `conteudo`, `foto_capa`, `tipo`, `usuario_id`) VALUES
(
  'Chuvas intensas causam alagamentos e deslizamentos no litoral norte de SP',
  'chuvas-intensas-alagamentos-deslizamentos-litoral-norte-sp',
  'As chuvas intensas que atingem o Estado de São Paulo desde sábado (7) provocaram alagamentos, deslizamentos de terra e transtornos no trânsito em diferentes regiões, com destaque para o litoral norte. Em São Sebastião, o temporal prejudicou a mobilidade na Rodovia Rio-Santos (BR-101), especialmente na região de Juquehy, onde houve queda de barreira.',
  'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=300&q=80',
  'noticia',
  1
),
(
  'Chuva forte alaga Caraguatatuba e Ubatuba e deixa jovens ilhados em cachoeira',
  'chuva-forte-alaga-caraguatatuba-ubatuba-jovens-ilhados',
  'A chuva forte que atingiu o Litoral Norte de São Paulo na noite deste sábado (11) provocou alagamentos e mobilizou equipes de emergência em Caraguatatuba e Ubatuba. Dois jovens chegaram a ficar ilhados em uma cachoeira após uma cabeça d\'água.',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=300&q=80',
  'noticia',
  1
),
(
  'Ubatuba registra 201mm de chuva em 12 horas e recebe alerta extremo da Defesa Civil',
  'ubatuba-201mm-chuva-12-horas-alerta-extremo-defesa-civil',
  'A cidade de Ubatuba, no litoral norte de São Paulo, enfrenta os impactos de forte temporal nesta quinta-feira (8). Segundo a Defesa Civil, o município registrou cerca de 201 milímetros de chuva nas últimas 12 horas, volume elevado que levou à emissão de alerta extremo para risco de alagamentos e deslizamentos de terra.',
  'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&q=80',
  'noticia',
  1
),
(
  'Ventos fortes derrubam árvores e postes em Ubatuba e deixam família desalojada',
  'ventos-fortes-arvores-postes-ubatuba-familia-desalojada',
  'Uma chuva intensa, acompanhada de ventos fortes, provocou transtornos em Ubatuba, no Litoral Norte de São Paulo, entre quarta-feira (11) e quinta-feira (12). Segundo a Defesa Civil de SP, houve registro de quedas de árvores, queda de postes de energia elétrica e pontos de alagamento na cidade. Uma família está desalojada.',
  'https://images.unsplash.com/photo-1527482937786-6608f6e14c15?w=300&q=80',
  'noticia',
  1
);