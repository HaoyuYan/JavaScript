var MCPE_MOD_LEAVE_GAME_HOOK = false;

var MCPE_LEVEL_DRONE_POINT = {
  x: 0,
  y: 0,
  z: 0
};
var MCPE_MOD_RUNTIME_ENVIRONMENT = "mcpe";
var ENABLE_MCPE_GUI = true;
var MCPE_GUI_buttons = MCPE_GUI_buttons || [];
function GajtiSQgXPRcFrkDmLKVJIHatg() {
  MCPE_MOD_RUNTIME_ENVIRONMENT = "android";
    Level.spawnMob(~~(Player.getPointedVecX()*100)/100, ~~(Player.getPointedVecY()*100)/100, ~~(Player.getPointedVecZ()*100)/100, 93);
  MCPE_GUI_SHOW_CLIENT_MESSAGE('pong~闪电来了');

}
MCPE_GUI_buttons.push(['作死技能1', GajtiSQgXPRcFrkDmLKVJIHatg]);

var ENABLE_MCPE_GUI = true;
var MCPE_GUI_buttons = MCPE_GUI_buttons || [];
on gdYkCuqpARhFPEMEtpdsPexgWb() {
  MCPE_MOD_RUNTIME_ENVIRONMENT = "android";
  explode(~~(Player.getPointedVecX()*100)/100, ~~(Player.getPointedVecY()*100)/100, ~~(Player.getPointedVecZ()*100)/100, 5, true);
  MCPE_GUI_SHOW_CLIENT_MESSAGE('爆炸了 快跑~');

}
MCPE_GUI_buttons.push(['作死技能2', gdYkCuqpARhFPEMEtpdsPexgWb]);

var ENABLE_MCPE_GUI = true;
var MCPE_GUI_buttons = MCPE_GUI_buttons || [];
function PESiunrPRtutNJYxLKhJagAfbF() {
  MCPE_MOD_RUNTIME_ENVIRONMENT = "android";

  var MCPE_MOD__temp_value_0 = 7;
  var MCPE_MOD__temp_value_1 = new String(MCPE_MOD__temp_value_0).valueOf();
  var MCPE_MOD__temp_value_2 = 0;
  var MCPE_MOD__temp_value_3 = 0;
  if (MCPE_MOD__temp_value_1.split('.').length == 2) {
    MCPE_MOD__temp_value_3 = MCPE_MOD__temp_value_1.split('.')[0];
    MCPE_MOD__temp_value_2 = MCPE_MOD__temp_value_1.split('.')[1];
    if (MCPE_MOD__temp_value_2 == 101) {
      MCPE_MOD__temp_value_2 = 10;
    }
  } else if (MCPE_MOD__temp_value_1.indexOf('.') < 0) {
    MCPE_MOD__temp_value_3 = MCPE_MOD__temp_value_0;
  }

  MCPE_MOD_FUNCTION_make_sphere(~~(Player.getPointedVecX()*100)/100, ~~(Player.getPointedVecY()*100)/100, ~~(Player.getPointedVecZ()*100)/100, 5, MCPE_MOD__temp_value_3, MCPE_MOD__temp_value_2);
  MCPE_GUI_SHOW_CLIENT_MESSAGE('你将窒息而亡');

}
MCPE_GUI_buttons.push(['作死技能3', PESiunrPRtutNJYxLKhJagAfbF]);

var GUI;
var menu;
var exitUI;

function dip2px(dips) {
  var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
var MCPE_GUI_main_menu_btn;
function create_main_btn(ctx) {
  var layout = new android.widget.LinearLayout(ctx);
  layout.setOrientation(1);

  MCPE_GUI_main_menu_btn = new android.widget.Button(ctx);
  MCPE_GUI_main_menu_btn.setText("技能列表");
  MCPE_GUI_main_menu_btn.setBackgroundColor(android.graphics.Color.argb(70,255, 255, 255));
  MCPE_GUI_main_menu_btn.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg) {
      mainMenu();
      MCPE_GUI_main_menu_btn.setBackgroundColor(android.graphics.Color.TRANSPARENT);
    }
  }));
  layout.addView(MCPE_GUI_main_menu_btn);

  GUI = new android.widget.PopupWindow(layout, dip2px(100), android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
  GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
  GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
}

function MCPE_GUI_INIT() {
  var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  ctx.runOnUiThread(new java.lang.Runnable({
    run: function() {
      try {
        create_main_btn(ctx);
      } catch(err) {
        print("An error occured: " + err);
      }
    }
  }));
}

function mainMenu() {
  var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  ctx.runOnUiThread(new java.lang.Runnable({
    run: function() {
      try {
        var menuLayout = new android.widget.LinearLayout(ctx);
        var menuScroll = new android.widget.ScrollView(ctx);
        var menuLayout1 = new android.widget.LinearLayout(ctx);
        menuLayout.setOrientation(1);
        menuLayout1.setOrientation(1);

        menuScroll.addView(m
