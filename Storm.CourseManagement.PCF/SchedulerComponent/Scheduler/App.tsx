import * as React from "react";

import {
  Inject,
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  ResourcesDirective,
  ResourceDirective,
  TimelineViews,
  EventSettingsModel,
  Resize,
  DragAndDrop,
  DragEventArgs,
  ResizeEventArgs,
  GroupModel,
  ActionEventArgs,
  QuickInfoTemplatesModel,
  PopupOpenEventArgs,
  CellClickEventArgs,
} from "@syncfusion/ej2-react-schedule";
import { ItemModel } from "@syncfusion/ej2-react-navigations";
import { DataManager, ODataV4Adaptor, Query } from "@syncfusion/ej2-data";

import "@syncfusion/ej2/fluent.css";
import "@syncfusion/ej2-icons/styles/fluent.css";

export interface SchedulerProps {
  width?: number;
  height?: number;
  visible?: boolean;
}

export class App extends React.Component<SchedulerProps> {
  schedulerRef: ScheduleComponent | null;

  // data
  eventSettings: EventSettingsModel = {
    dataSource: [
      {
        Id: 1,
        Subject: "Harry Potter v Henry Porter",
        StartTime: new Date(2022, 8, 16, 9, 0),
        EndTime: new Date(2022, 8, 16, 10, 30),
        Location: "Meeting Room",
        ResourceID: "fc7f663e-392d-ed11-9db1-0022489c6d7e", // "d95536b3-d0af-eb11-8236-000d3abafd44", //
      },
      {
        Id: 2,
        Subject: "Starbucks v Sunbucks",
        StartTime: new Date(2022, 8, 16, 15, 0),
        EndTime: new Date(2022, 8, 16, 16, 30),
        Location: "Meeting Room",
        ResourceID: "1fd35d95-d82a-ed11-9db1-000d3a6551c2", // "9cbb317c-d034-ed11-9db1-000d3a2d29bc", //
      },
      {
        Id: 11,
        Subject: "Not Available",
        StartTime: new Date(2022, 8, 16, 10, 30),
        EndTime: new Date(2022, 8, 16, 11, 30),
        IsBlock: true,
        ResourceID: "fc7f663e-392d-ed11-9db1-0022489c6d7e", // "d95536b3-d0af-eb11-8236-000d3abafd44", //
      },
      {
        Id: 12,
        Subject: "Not Available",
        StartTime: new Date(2022, 8, 16, 14, 0),
        EndTime: new Date(2022, 8, 16, 15, 0),
        IsBlock: true,
        ResourceID: "fc7f663e-392d-ed11-9db1-0022489c6d7e", // "d95536b3-d0af-eb11-8236-000d3abafd44", //
      },
      {
        Id: 22,
        Subject: "Not Available",
        StartTime: new Date(2022, 8, 16, 11, 0),
        EndTime: new Date(2022, 8, 16, 12, 0),
        IsBlock: true,
        ResourceID: "1fd35d95-d82a-ed11-9db1-000d3a6551c2", // "9cbb317c-d034-ed11-9db1-000d3a2d29bc", //
      },
      {
        Id: 23,
        Subject: "Not Available",
        StartTime: new Date(2022, 8, 16, 14, 0),
        EndTime: new Date(2022, 8, 16, 15, 0),
        IsBlock: true,
        ResourceID: "1fd35d95-d82a-ed11-9db1-000d3a6551c2", // "9cbb317c-d034-ed11-9db1-000d3a2d29bc", //
      },
      {
        Id: 111,
        Subject: "Lunch Break",
        StartTime: new Date(2022, 8, 1, 13, 0),
        EndTime: new Date(2022, 8, 1, 14, 0),
        RecurrenceRule: "FREQ=DAILY;INTERVAL=1;",
        IsBlock: true,
        ResourceID: "fc7f663e-392d-ed11-9db1-0022489c6d7e", // "d95536b3-d0af-eb11-8236-000d3abafd44", //
      },
      {
        Id: 222,
        Subject: "Lunch Break",
        StartTime: new Date(2022, 8, 1, 13, 0),
        EndTime: new Date(2022, 8, 1, 14, 0),
        RecurrenceRule: "FREQ=DAILY;INTERVAL=1;",
        IsBlock: true,
        ResourceID: "1fd35d95-d82a-ed11-9db1-000d3a6551c2", // "9cbb317c-d034-ed11-9db1-000d3a2d29bc", //
      },
    ],
  };

  dataverseApi = "/api/data/v9.2/";

  dataverseDataManager = new DataManager({
    url: this.dataverseApi,
    adaptor: new ODataV4Adaptor(),
  });

  usersQuery = new Query("systemusers")
    .select(["systemuserid", "fullname"])
    //.where("issyncwithdirectory", "equal", true)
    .sortBy("fullname");

  groupData: GroupModel = {
    resources: ["Resources"],
  };

  workDays: number[] = [1, 2, 3, 4, 5];

  // templates
  editDialogTemplate = (props: Record<string, any>) => {};

  // events
  onCreated = () => {
    this.forceUpdate();
    console.log("created event");
  };

  onActionBegin = (args: ActionEventArgs) => {
    if (args.requestType === "toolbarItemRendering") {
      let separatorItem: ItemModel = { align: "Left", type: "Separator" };
      args.items?.push(separatorItem);

      let bookItem: ItemModel = { align: "Left", text: "Book", prefixIcon: "e-icons e-day" };
      args.items?.push(bookItem);

      let versionItem: ItemModel = { align: "Right", text: "v0.0.8" };
      args.items?.push(versionItem);
    }
  };

  onCellClick = (args: CellClickEventArgs) => {
    this.schedulerRef?.openEditor(args, "Add");
  };

  onPopupOpen = (args: PopupOpenEventArgs) => {
    if (args.type === "Editor") {
      // Create required custom elements in initial time
      // if (!args.element.querySelector(".custom-field-row")) {
      //   let row: HTMLElement = createElement("div", { className: "custom-field-row" });
      //   let formElement: HTMLElement = args.element.querySelector(".e-schedule-form");
      //   formElement.firstChild.insertBefore(row, formElement.firstChild.firstChild);
      //   let container: HTMLElement = createElement("div", { className: "custom-field-container" });
      //   let inputEle: HTMLInputElement = createElement("input", {
      //     className: "e-field",
      //     attrs: { name: "EventType" },
      //   }) as HTMLInputElement;
      //   container.appendChild(inputEle);
      //   row.appendChild(container);
      //   let dropDownList: DropDownList = new DropDownList({
      //     dataSource: [
      //       { text: "Public Event", value: "public-event" },
      //       { text: "Maintenance", value: "maintenance" },
      //       { text: "Commercial Event", value: "commercial-event" },
      //       { text: "Family Event", value: "family-event" },
      //     ],
      //     fields: { text: "text", value: "value" },
      //     value: args.data.EventType as string,
      //     floatLabelType: "Always",
      //     placeholder: "Event Type",
      //   });
      //   dropDownList.appendTo(inputEle);
      //   inputEle.setAttribute("name", "EventType");
      // }

      const alldayRow = args.element.querySelector<HTMLDivElement>(".e-all-day-time-zone-row");
      if (alldayRow) {
        alldayRow.style.display = "none";
      }
      const recurrenceRow = args.element.querySelector<HTMLDivElement>(".e-recurrenceeditor");
      if (recurrenceRow) {
        recurrenceRow.style.display = "none";
      }
    } else if (args.type === "QuickInfo") {
      if (!args.data?.Subject) {
        args.cancel = true;
      }
    }
    console.log(args);
  };

  // onDragStart = (args: DragEventArgs) => {
  //   console.log("Drag start event");
  //   console.log(args);
  // };

  // onResizeStart = (args: ResizeEventArgs) => {
  //   console.log("Resize start event");
  //   console.log(args);
  // };

  // helpers

  public render() {
    const { width, height } = this.props;

    return (
      <ScheduleComponent
        id="scheduler"
        ref={(t) => (this.schedulerRef = t)}
        width={"100%"}
        height={"100%"}
        eventSettings={this.eventSettings}
        workDays={this.workDays}
        group={this.groupData}
        created={this.onCreated}
        actionBegin={this.onActionBegin}
        cellClick={this.onCellClick}
        popupOpen={this.onPopupOpen}
        // resizeStart={this.onResizeStart}
        // dragStart={this.onDragStart}
      >
        <ViewsDirective>
          <ViewDirective option="TimelineDay" displayName="Day" />
          <ViewDirective option="TimelineWeek" displayName="Week" isSelected={true} />
        </ViewsDirective>
        <ResourcesDirective>
          <ResourceDirective
            field="ResourceID"
            title="Resource Name"
            name="Resources"
            textField="fullname"
            idField="systemuserid"
            dataSource={this.dataverseDataManager}
            query={this.usersQuery}
          />
        </ResourcesDirective>
        <Inject services={[TimelineViews, Resize, DragAndDrop]} />
      </ScheduleComponent>
    );
  }
}
