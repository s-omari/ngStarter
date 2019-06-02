
export const projects = {
    data: [
        {
          id: '30d7637e',
          nodeType: 'project',
          name: 'Anappro',
          about: 'Anappro is an application',
          users: [
              {
                  id: '1', name: 'Smith',
              }],
          children: [
           {          name: 'Web App' ,
           nodeType: 'application',
      iconname: 'important_devices',
      projectId:'30d7637e',
      applicationId:1,
    },
    {          name: 'Mobile App' ,
    nodeType: 'application',
iconname: 'important_devices',
projectId:'30d7637e',
applicationId:2,
},
          ]
        }, {
          id: '21bb9516',
           name: 'BioReader',
           nodeType: 'project',
           about: 'Bioreader is an application',
           users: [
               { id: '1', name: 'Mike Smith'},
               { id: '2', name: 'Omar Doe'},
               { id: '3', name: 'Jane M.'}
           ],
          children: [
            {name: 'Pumpkins'},
            {name: 'Carrots'},
          ]
        },
      ]
};


export const applicationMenu = [
  {
    "title": "Dynamic Form",
    "route": "demo/dynamic-form",
    "icon": "chrome_reader_mode"
  },
  {
    "title": "UI Components",
    "route": "demo/ui-components",
    "icon": "important_devices",
    "children": [
      {
        "title": "material components",
        "route": "demo/ui-components/material-components",
        "icon": "table"
      },
      {
        "title": "custom components",
        "route": "demo/ui-components/custom-components",
        "icon": "table"
      }
    ]
  }
]
export const TreeData = [
  {
     name: 'Projects',
     iconname: 'folder_special',
     nodeType: 'projectsParent',
     children: [
       {
        projectId: '30d7637e',
         nodeType: 'project',
         name: 'Anappro',
         about: 'Anappro is an application',
         users: [
             {
                 id: '1', name: 'Smith',
             }],
         children: [
          {
            name: 'Web App' ,
            nodeType: 'application',
       iconname: 'important_devices',
       projectId:'30d7637e',
       applicationId:1,


          },
           {name: 'Brussel sprouts'},
         ]
       }, {
        projectId: '21bb9516',
          name: 'BioReader',
          nodeType: 'project',
          about: 'Bioreader is an application',
          users: [
              { id: '1', name: 'Mike Smith'},
              { id: '2', name: 'Omar Doe'},
              { id: '3', name: 'Jane M.'}
          ],
         children: [
           {name: 'Pumpkins'},
           {name: 'Carrots'},
         ]
       },
     ]
   },
   {
     name: 'Users',
     nodeType: 'usersParent',
     iconname: 'people_outline',
     children: [
       {
        id: '21bb9522',
         name: 'Mike Ike' ,
       nodeType: 'user',
      },
       {
        id: '21bb9533',
         name: 'Omar Badaoui',
       nodeType: 'user',
      },
       {
        id: '21bb9544',
         name: 'john doe',
       nodeType: 'user',
      },
     ]
   },
 ];

export const users = [

];
