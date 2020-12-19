export default function () {
  return [
    {
      title: "我的主页",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "章节学习",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/course-sections",
    },
    {
      title: "综合编程",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/code-test",
    },
    {
      title: "Forms & Components",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
}
