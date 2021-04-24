module.exports = {
	themeConfig: {
    nav: [
      {
        text: 'Tutorial Xadrezinho',
				link:"/tutorial"
      },
			{
				text:'Manual Xadrez',
				link:'/'
			},
			{
				text: 'Autores',
				link: '/autores'
			}
    ],
		sidebar:"auto"
  },
  markdown: {
    lineNumbers: true
  },
  locales: {
    '/': {
      lang: 'pt-BR',
      title: 'Xadrezinho',
      description: 'Documentação Xadrezinho'
    }
  }
}
