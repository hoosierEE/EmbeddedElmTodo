Elm.Todo = Elm.Todo || {};
Elm.Todo.make = function (elm)
                {
                  elm.Todo = elm.Todo || {};
                  if (elm.Todo.values)
                  return elm.Todo.values;
                  var N = Elm.Native,
                      _N = N.Utils.make(elm),
                      _L = N.List.make(elm),
                      _E = N.Error.make(elm),
                      _J = N.JavaScript.make(elm),
                      $moduleName = "Todo";
                  var Text = Elm.Text.make(elm);
                  var Text = Elm.Text.make(elm);
                  var Basics = Elm.Basics.make(elm);
                  var Signal = Elm.Signal.make(elm);
                  var List = Elm.List.make(elm);
                  var Maybe = Elm.Maybe.make(elm);
                  var Time = Elm.Time.make(elm);
                  var Prelude = Elm.Prelude.make(elm);
                  var Graphics = Graphics || {};
                  Graphics.Element = Elm.Graphics.Element.make(elm);
                  var Color = Elm.Color.make(elm);
                  var Graphics = Graphics || {};
                  Graphics.Collage = Elm.Graphics.Collage.make(elm);
                  var Window = Elm.Window.make(elm);
                  var Model = Elm.Model.make(elm);
                  var Update = Elm.Update.make(elm);
                  var Display = Elm.Display.make(elm);
                  var Inputs = Elm.Inputs.make(elm);
                  var _op = {};
                  var currentState = A3(Signal.foldp,
                                        Update.update,
                                        Model.initialState,
                                        Inputs.actions);
                  var main = A2(Signal._op["~"],
                                A2(Signal._op["~"],
                                   A2(Signal._op["<~"],Display.display,Window.dimensions),
                                   Inputs.fieldState),
                                A2(Signal.lift,
                                   function (_)
                                   {
                                     return _.tasks;
                                   },
                                   currentState));
                  elm.Todo.values = {_op: _op, currentState: currentState, main: main};
                  return elm.Todo.values;
                };Elm.Display = Elm.Display || {};
Elm.Display.make = function (elm)
                   {
                     elm.Display = elm.Display || {};
                     if (elm.Display.values)
                     return elm.Display.values;
                     var N = Elm.Native,
                         _N = N.Utils.make(elm),
                         _L = N.List.make(elm),
                         _E = N.Error.make(elm),
                         _J = N.JavaScript.make(elm),
                         $moduleName = "Display";
                     var Text = Elm.Text.make(elm);
                     var Text = Elm.Text.make(elm);
                     var Basics = Elm.Basics.make(elm);
                     var Signal = Elm.Signal.make(elm);
                     var List = Elm.List.make(elm);
                     var Maybe = Elm.Maybe.make(elm);
                     var Time = Elm.Time.make(elm);
                     var Prelude = Elm.Prelude.make(elm);
                     var Graphics = Graphics || {};
                     Graphics.Element = Elm.Graphics.Element.make(elm);
                     var Color = Elm.Color.make(elm);
                     var Graphics = Graphics || {};
                     Graphics.Collage = Elm.Graphics.Collage.make(elm);
                     var Model = Elm.Model.make(elm);
                     var Inputs = Elm.Inputs.make(elm);
                     var Graphics = Graphics || {};
                     Graphics.Input = Elm.Graphics.Input.make(elm);
                     var _op = {};
                     var todoWidth = 500;
                     var titleColor = A3(Color.rgb,179,179,179);
                     var taskHeight = 30;
                     var taskColor = A4(Color.rgba,255,255,255,0.9);
                     var spacerColor2 = A3(Color.rgb,108,125,119);
                     var spacerColor1 = A3(Color.rgb,141,125,119);
                     var leftPadding = 60;
                     var inputColor = A3(Color.rgb,247,247,247);
                     var inputBar = function (fieldState)
                                    {
                                      return Graphics.Element.color(inputColor)(A3(Graphics.Element.container,
                                                                                   todoWidth,
                                                                                   45,
                                                                                   Graphics.Element.midRight)(Graphics.Element.color(inputColor)(A2(Graphics.Element.size,
                                                                                                                                                    todoWidth - leftPadding,
                                                                                                                                                    45)(A3(Inputs.taskField.field,
                                                                                                                                                           Basics.id,
                                                                                                                                                           "What needs to be done?",
                                                                                                                                                           fieldState)))));
                                    };
                     var header = A2(Graphics.Element.flow,
                                     Graphics.Element.down,
                                     _J.toList([Graphics.Element.width(todoWidth)(Text.centered(Text.color(titleColor)(Text.height(48)(Text.toText("todos"))))),
                                                A2(Graphics.Element.color,
                                                   spacerColor1,
                                                   A2(Graphics.Element.spacer,todoWidth,15)),
                                                A2(Graphics.Element.color,
                                                   spacerColor2,
                                                   A2(Graphics.Element.spacer,todoWidth,1))]));
                     var buttonWidth = 30;
                     var displayTask = function (task)
                                       {
                                         return function ()
                                                {
                                                  var taskWidth = todoWidth - leftPadding - buttonWidth;
                                                  var btn = function (clr)
                                                            {
                                                              return function ()
                                                                     {
                                                                       var x = Text.text(Text.height(taskHeight - 4)(Text.color(clr)(Text.toText("&times;"))));
                                                                       return A4(Graphics.Element.container,
                                                                                 buttonWidth,
                                                                                 taskHeight,
                                                                                 Graphics.Element.middle,
                                                                                 x);
                                                                     }();
                                                            };
                                                  return Graphics.Element.color(taskColor)(A3(Graphics.Element.container,
                                                                                              todoWidth,
                                                                                              taskHeight,
                                                                                              Graphics.Element.midRight)(A2(Graphics.Element.flow,
                                                                                                                            Graphics.Element.right,
                                                                                                                            _J.toList([A3(Graphics.Element.container,
                                                                                                                                          taskWidth,
                                                                                                                                          taskHeight,
                                                                                                                                          Graphics.Element.midLeft)(Text.text(Text.toText(task.description))),
                                                                                                                                       A4(Inputs.taskDelete.customButton,
                                                                                                                                          task.id,
                                                                                                                                          btn(inputColor),
                                                                                                                                          btn(titleColor),
                                                                                                                                          btn(Color.red))]))));
                                                }();
                                       };
                     var display = F3(function (arg2,fieldState,tasks)
                                      {
                                        return function ()
                                               {
                                                 switch (arg2.ctor)
                                                 {case
                                                  "_Tuple2" :
                                                    return function ()
                                                           {
                                                             var pos = A2(Graphics.Element.midTopAt,
                                                                          Graphics.Element.relative(0.5),
                                                                          Graphics.Element.absolute(40));
                                                             return Graphics.Element.layers(_J.toList([A3(Graphics.Element.tiledImage,
                                                                                                          arg2._0,
                                                                                                          arg2._1,
                                                                                                          "/texture.png"),
                                                                                                       A3(Graphics.Element.container,
                                                                                                          arg2._0,
                                                                                                          arg2._1,
                                                                                                          pos)(A2(Graphics.Element.flow,
                                                                                                                  Graphics.Element.down,
                                                                                                                  _J.toList([header,
                                                                                                                             inputBar(fieldState),
                                                                                                                             A2(Graphics.Element.flow,
                                                                                                                                Graphics.Element.down,
                                                                                                                                A2(List.map,
                                                                                                                                   displayTask,
                                                                                                                                   tasks))])))]));
                                                           }();}
                                                 _E.Case($moduleName,"between lines 23 and 28");
                                               }();
                                      });
                     elm.Display.values = {_op: _op, display: display};
                     return elm.Display.values;
                   };Elm.Inputs = Elm.Inputs || {};
Elm.Inputs.make = function (elm)
                  {
                    elm.Inputs = elm.Inputs || {};
                    if (elm.Inputs.values)
                    return elm.Inputs.values;
                    var N = Elm.Native,
                        _N = N.Utils.make(elm),
                        _L = N.List.make(elm),
                        _E = N.Error.make(elm),
                        _J = N.JavaScript.make(elm),
                        $moduleName = "Inputs";
                    var Text = Elm.Text.make(elm);
                    var Text = Elm.Text.make(elm);
                    var Basics = Elm.Basics.make(elm);
                    var Signal = Elm.Signal.make(elm);
                    var List = Elm.List.make(elm);
                    var Maybe = Elm.Maybe.make(elm);
                    var Time = Elm.Time.make(elm);
                    var Prelude = Elm.Prelude.make(elm);
                    var Graphics = Graphics || {};
                    Graphics.Element = Elm.Graphics.Element.make(elm);
                    var Color = Elm.Color.make(elm);
                    var Graphics = Graphics || {};
                    Graphics.Collage = Elm.Graphics.Collage.make(elm);
                    var Graphics = Graphics || {};
                    Graphics.Input = Elm.Graphics.Input.make(elm);
                    var Keyboard = Elm.Keyboard.make(elm);
                    var Model = Elm.Model.make(elm);
                    var _op = {};
                    var taskField = Graphics.Input.fields(Graphics.Input.emptyFieldState);
                    var taskDelete = Graphics.Input.customButtons(0);
                    var entered = A3(Signal.keepIf,Basics.id,true,Keyboard.enter);
                    var fieldState = A2(Signal.merge,
                                        taskField.events,
                                        A2(Signal.sampleOn,
                                           entered,
                                           Signal.constant(Graphics.Input.emptyFieldState)));
                    var actions = A2(Signal.merge,
                                     A2(Signal._op["<~"],
                                        Model.Add,
                                        A2(Signal.sampleOn,
                                           entered,
                                           A2(Signal._op["<~"],
                                              function (_)
                                              {
                                                return _.string;
                                              },
                                              taskField.events))),
                                     A2(Signal._op["<~"],Model.Remove,taskDelete.events));
                    elm.Inputs.values = {_op: _op, taskField: taskField, taskDelete: taskDelete, actions: actions, fieldState: fieldState};
                    return elm.Inputs.values;
                  };Elm.Update = Elm.Update || {};
Elm.Update.make = function (elm)
                  {
                    elm.Update = elm.Update || {};
                    if (elm.Update.values)
                    return elm.Update.values;
                    var N = Elm.Native,
                        _N = N.Utils.make(elm),
                        _L = N.List.make(elm),
                        _E = N.Error.make(elm),
                        _J = N.JavaScript.make(elm),
                        $moduleName = "Update";
                    var Text = Elm.Text.make(elm);
                    var Text = Elm.Text.make(elm);
                    var Basics = Elm.Basics.make(elm);
                    var Signal = Elm.Signal.make(elm);
                    var List = Elm.List.make(elm);
                    var Maybe = Elm.Maybe.make(elm);
                    var Time = Elm.Time.make(elm);
                    var Prelude = Elm.Prelude.make(elm);
                    var Graphics = Graphics || {};
                    Graphics.Element = Elm.Graphics.Element.make(elm);
                    var Color = Elm.Color.make(elm);
                    var Graphics = Graphics || {};
                    Graphics.Collage = Elm.Graphics.Collage.make(elm);
                    var Model = Elm.Model.make(elm);
                    var _op = {};
                    var update = F2(function (action,state)
                                    {
                                      return function ()
                                             {
                                               switch (action.ctor)
                                               {case
                                                "Add" :
                                                  switch (action._0)
                                                  {case
                                                   "" :
                                                     return state;}
                                                  return {_: {}, tasks: {ctor: "::", _0: A3(Model.Task,
                                                                                            false,
                                                                                            action._0,
                                                                                            state.uid), _1: state.tasks}, uid: state.uid + 1};
                                                case
                                                "Remove" :
                                                  return _N.replace([["tasks",
                                                                      A2(List.filter,
                                                                         function (task)
                                                                         {
                                                                           return ! _N.eq(task.id,
                                                                                          action._0);
                                                                         },
                                                                         state.tasks)]],
                                                                    state);}
                                               _E.Case($moduleName,"between lines 8 and 21");
                                             }();
                                    });
                    elm.Update.values = {_op: _op, update: update};
                    return elm.Update.values;
                  };Elm.Model = Elm.Model || {};
Elm.Model.make = function (elm)
                 {
                   elm.Model = elm.Model || {};
                   if (elm.Model.values)
                   return elm.Model.values;
                   var N = Elm.Native,
                       _N = N.Utils.make(elm),
                       _L = N.List.make(elm),
                       _E = N.Error.make(elm),
                       _J = N.JavaScript.make(elm),
                       $moduleName = "Model";
                   var Text = Elm.Text.make(elm);
                   var Text = Elm.Text.make(elm);
                   var Basics = Elm.Basics.make(elm);
                   var Signal = Elm.Signal.make(elm);
                   var List = Elm.List.make(elm);
                   var Maybe = Elm.Maybe.make(elm);
                   var Time = Elm.Time.make(elm);
                   var Prelude = Elm.Prelude.make(elm);
                   var Graphics = Graphics || {};
                   Graphics.Element = Elm.Graphics.Element.make(elm);
                   var Color = Elm.Color.make(elm);
                   var Graphics = Graphics || {};
                   Graphics.Collage = Elm.Graphics.Collage.make(elm);
                   var _op = {};
                   var initialState = {_: {}, tasks: _J.toList([]), uid: 0};
                   var TodoState = F2(function (a,b)
                                      {
                                        return {_: {}, tasks: a, uid: b};
                                      });
                   var Task = F3(function (a,b,c)
                                 {
                                   return {_: {}, description: b, done: a, id: c};
                                 });
                   var Remove = function (a)
                                {
                                  return {ctor: "Remove", _0: a};
                                };
                   var Add = function (a)
                             {
                               return {ctor: "Add", _0: a};
                             };
                   elm.Model.values = {_op: _op, initialState: initialState, Add: Add, Remove: Remove, Task: Task, TodoState: TodoState};
                   return elm.Model.values;
                 };