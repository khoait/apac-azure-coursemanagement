export class CourseForm {
  static async addCustomPane(executionContext: Xrm.Events.EventContext) {
    const formContext = executionContext.getFormContext();

    if (!formContext) {
      return;
    }

    let pane = Xrm.App.sidePanes.getPane("EnrollmentsPane");
    if (!pane) {
      pane = await Xrm.App.sidePanes.createPane({
        title: "Course Enrollments",
        imageSrc: "WebResources/storm_/CourseManagement/img/enrollment.svg",
        paneId: "EnrollmentsPane",
        canClose: true,
        width: 400,
      });
    }

    const pageInput: Xrm.Navigation.CustomPage = {
      pageType: "custom",
      name: "storm_enrollmentssidepane_da81c",
      entityName: "storm_course",
      recordId: formContext.data.entity.getId(),
    };

    pane.navigate(pageInput);
  }
}
