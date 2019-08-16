export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d5736245a197cb80a05d3fe',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-85ebfdac',
                  apiId: '412970c7-9a14-4c78-8d6d-fce8455feb7c'
                },
                {
                  buildHookId: '5d57362489f2f49cf84fb930',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-f32vypki',
                  apiId: 'ef28651a-1ba7-465a-8b0e-a28049901a29'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/huayra/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-f32vypki.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
