export class CourseRibbon {
  static async openCancelCourseDialog(entityName: string, selectedIds: string[], dialogId: string) {
    if (!selectedIds.length) {
      return;
    }

    const pageInput: Xrm.Navigation.CustomPage = {
      pageType: "custom",
      name: dialogId,
      entityName: entityName,
      recordId: selectedIds[0],
    };

    const navigationOptions: Xrm.Navigation.NavigationOptions = {
      target: 2,
      position: 1,
      width: { value: 500, unit: "px" },
      height: { value: 400, unit: "px" },
      title: "Cancel Course",
    };

    try {
      const result = await Xrm.Navigation.navigateTo(pageInput, navigationOptions);
      console.log(result);
    } catch (error) {
      // handle error
      console.log(error);
    }
  }

  static async openCancelCourseSideDialog(entityName: string, selectedIds: string[], dialogId: string) {
    if (!selectedIds.length) {
      return;
    }

    const pageInput: Xrm.Navigation.CustomPage = {
      pageType: "custom",
      name: dialogId,
      entityName: entityName,
      recordId: selectedIds[0],
    };

    const navigationOptions: Xrm.Navigation.NavigationOptions = {
      target: 2,
      position: 2,
      width: { value: 20, unit: "%" },
      title: "Cancel Course",
    };

    try {
      const result = await Xrm.Navigation.navigateTo(pageInput, navigationOptions);
      console.log(result);
    } catch (error) {
      // handle error
      console.log(error);
    }
  }
}
