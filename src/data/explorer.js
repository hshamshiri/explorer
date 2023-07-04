const data = {
  name: "Root",
  isFolder: true,
  id: 0,
  parentId: null,
  children: [
    {
      parentId: 0,
      id: 1,
      name: "Session1",
      isFolder: true,

      children: [
        { id: 4, parentId: 1, name: "index.html", isFolder: false },
        { id: 5, parentId: 1, name: "intro.css", isFolder: false },
        {
          id: 6,
          parentId: 1,
          name: "old project",
          isFolder: true,
          children: [
            { id: 10, parentId: 6, name: "index.js", isFolder: false },
            { id: 11, parentId: 6, name: "file.css", isFolder: false },
            {
              id: 12,
              parentId: 6,
              name: "new project",
              isFolder: true,
              children: [
                { id: 13, parentId: 12, name: "index.txt", isFolder: false },
                { id: 14, parentId: 12, name: "file.css", isFolder: false },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      parentId: 0,
      name: "Session2",
      isFolder: true,
      children: [{ id: 7, parentId: 2, name: "file.txt", isFolder: false }],
    },
    {
      id: 3,
      parentId: 0,
      name: "Session3",
      isFolder: true,
      children: [
        { id: 8, parentId: 3, name: "file.css", isFolder: false },
        {
          id: 9,
          parentId: 3,
          name: "project",
          isFolder: true,
          children: [
            { id: 10, parentId: 9, name: "text.html", isFolder: false },
            { id: 11, parentId: 9, name: "text.css", isFolder: false },
          ],
        },
      ],
    },
  ],
};

export default data;
