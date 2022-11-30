export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '638729044a26b9378f469cdc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-studio-yz8m7tgb',
                  apiId: '4abd4e6a-8687-4616-93b1-1ccd79f24e6b'
                },
                {
                  buildHookId: '638729044712d3355fd0d553',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-web-fsygwrzt',
                  apiId: 'c2857b53-451a-4af3-b665-69bed925539d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Abhayjitsandhu/sanity-gatsby',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-web-fsygwrzt.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
