
frame_insert = function () {
  var frame_block = '<block type="cueQueue"></block><block type="rule"></block>';
  document.write(frame_block);
  var s = 'Blockly.Blocks["scene"] = {'+
      'init: function() {this.appendStatementInput("S").setCheck(null).appendField("Scene");'+
        'this.setNextStatement(true, null);'+
        'this.setPreviousStatement(true, null);'+
        'this.setColour(20);'+
        'this.setTooltip("Scene is the outer frame.");'+
      '}};';
  var c = 'Blockly.Blocks["cueQueue"] = {'+
      'init: function() {this.appendStatementInput("C").setCheck("Cues").appendField("cueQueue");'+
        // 'this.setNextStatement(true, null);'+
        // 'this.setPreviousStatement(true, null);'+
        'this.setColour(20);'+
        // 'this.setOutput(true, null);'+
        'this.setTooltip("cueQueue is the second frame.");'+
      '}};';
  var r = 'Blockly.Blocks["rule"] = {'+
      'init: function() {this.appendStatementInput("avatar").setCheck("BlockLibs").appendField("Avatar");'+
      'this.appendStatementInput("do").setCheck("Dos").appendField("Do");'+
      'this.appendStatementInput("then").setCheck("Effects").appendField("Then");'+
        // 'this.setPreviousStatement(true, null);'+
        // 'this.setNextStatement(true, null);'+
        'this.setColour(20);'+
        // 'this.setOutput(true, null);'+
        'this.setTooltip("Rule base.");'+
      '}};';
  var ss = 'Blockly.Blocks["scene-object-set-status"] = {'+
      'init: function() {this.appendStatementInput("statusTo").appendField("StatusTo ").appendField(new Blockly.FieldDropdown([["Visible","true"], ["Invisible","false"]]), "initStatus").appendField("@ ");'+
        'this.setPreviousStatement(true, null);'+
        'this.setNextStatement(true, null);'+
        'this.setColour(20);'+
        'this.setTooltip("Rule base.");'+
      '}};';

  var condition = 'Blockly.Blocks["condition"] = {'+
      'init: function() {'+
        'this.appendStatementInput("avatar_a")'+
            '.setCheck(null)'+
            '.appendField("Avatar A");'+
        'this.appendStatementInput("avatar_b")'+
            '.setCheck(null)'+
            '.appendField("Avatar B");'+
        'this.appendValueInput("con")'+
            '.setCheck(null)'+
            '.appendField("Condition");'+
        'this.appendStatementInput("do")'+
            '.setCheck(null)'+
            '.appendField("Do");'+
        'this.setColour(20);'+
        'this.setTooltip("condition base");'+
      '}};';

  var frame = '';
  frame = eval(c+r);
  return "frame block done";
}

cue_insert = function () {
  var cue_block = '<block type="cue-move-object"></block><block type="cue-rotate-object"></block><block type="cue-scale-object"></block><block type="cue-wait"></block><block type="cue-play-audio"></block>';
  document.write(cue_block);
  var cmove = 'Blockly.Blocks["cue-move-object"] = {'+
                  'init: function() {'+
                    'this.appendStatementInput("ch_object_move")'+
                        '.setCheck("BlockLibs");'+
                    'this.appendDummyInput()'+
                        '.appendField("@ Cue Move");'+
                    'this.appendDummyInput()'+
                        '.appendField("moveVector : x =")'+
                        '.appendField(new Blockly.FieldNumber(0), "move_x")'+
                        '.appendField(", y =")'+
                        '.appendField(new Blockly.FieldNumber(0), "move_y")'+
                        '.appendField(" , z =")'+
                        '.appendField(new Blockly.FieldNumber(0), "move_z");'+
                    'this.appendDummyInput()'+
                        '.appendField("moveTime : ")'+
                        '.appendField(new Blockly.FieldNumber(0), "move_t")'+
                        '.appendField("sec(s)");'+
                    'this.setPreviousStatement(true, "Cues");'+
                    'this.setNextStatement(true, "Cues");'+
                    'this.setColour(70);'+
                  '}};';
  var crotate = 'Blockly.Blocks["cue-rotate-object"] = {'+
                  'init: function() {'+
                    'this.appendStatementInput("ch_object_rotate")'+
                        '.setCheck("BlockLibs");'+
                    'this.appendDummyInput()'+
                        '.appendField("@ Cue Rotate");'+
                    'this.appendDummyInput()'+
                        '.appendField("rotateAngles : x =")'+
                        '.appendField(new Blockly.FieldAngle(0), "rotate_x")'+
                        '.appendField(", y =")'+
                        '.appendField(new Blockly.FieldAngle(0), "rotate_y")'+
                        '.appendField(" , z =")'+
                        '.appendField(new Blockly.FieldAngle(0), "rotate_z");'+
                    'this.appendDummyInput()'+
                        '.appendField("rotateTime : ")'+
                        '.appendField(new Blockly.FieldNumber(0), "rotate_t")'+
                        '.appendField("sec(s)");'+
                    'this.setPreviousStatement(true, "Cues");'+
                    'this.setNextStatement(true, "Cues");'+
                    'this.setColour(70);'+
                  '}};';
  var cscale = 'Blockly.Blocks["cue-scale-object"] = {'+
                  'init: function() {'+
                    'this.appendStatementInput("ch_object_scale")'+
                        '.setCheck("BlockLibs");'+
                    'this.appendDummyInput()'+
                        '.appendField("@ Cue Scale");'+
                    'this.appendDummyInput()'+
                        '.appendField("scaleValues : x =")'+
                        '.appendField(new Blockly.FieldNumber(0), "scale_x")'+
                        '.appendField(", y =")'+
                        '.appendField(new Blockly.FieldNumber(0), "scale_y")'+
                        '.appendField(" , z =")'+
                        '.appendField(new Blockly.FieldNumber(0), "scale_z");'+
                    'this.appendDummyInput()'+
                        '.appendField("scaleTime : ")'+
                        '.appendField(new Blockly.FieldNumber(0), "scale_t")'+
                        '.appendField("sec(s)");'+
                    'this.setPreviousStatement(true, "Cues");'+
                    'this.setNextStatement(true, "Cues");'+
                    'this.setColour(70);'+
                  '}};';
  var cwait = 'Blockly.Blocks["cue-wait"] = {'+
                'init: function() {'+
                  'this.appendDummyInput()'+
                      '.appendField("Cue Wait")'+
                      '.appendField(new Blockly.FieldNumber(0), "waitTime")'+
                      '.appendField("sec(s)");'+
                  'this.setPreviousStatement(true, "Cues");'+
                  'this.setNextStatement(true, "Cues");'+
                  'this.setColour(70);'+
                '}};';
  var cplay = 'Blockly.Blocks["cue-play-audio"] = {'+
                  'init: function() {'+
                    'this.appendStatementInput("cue_play_audio")'+
                        '.setCheck("Audio");'+
                    'this.appendDummyInput()'+
                        '.appendField("@ Audio");'+
                    'this.setPreviousStatement(true, "Cues");'+
                    'this.setNextStatement(true, "Cues");'+
                    'this.setColour(70);'+
                  '}};';
  var cstatus = 'Blockly.Blocks["cue-set-object-status"] = {'+
                  'init: function() {'+
                  'this.appendStatementInput("ch_object_status")'+
                      '.setCheck("Cues");'+
                  'this.appendDummyInput().appendField("Cue Status")'+
                      '.appendField(new Blockly.FieldDropdown([["Visible","true"], ["Invisible","false"]]), "c_initStatus");'+
                  'this.setPreviousStatement(true, "Cues");'+
                  'this.setNextStatement(true, "Cues");'+
                  'this.setColour(70);'+
                  '}};';
  var cue = '';
  cue = eval(cmove + cscale + cwait + cplay + crotate);
  return "cue block done";
}



effect_insert = function() {
  var effect_block = '<block type="effect-create"></block><block type="effect-shoot"></block><block type="effect-play-audio"></block>';
  document.write(effect_block);
  var eshoot = 'Blockly.Blocks["effect-shoot"] = {'+
                  'init: function() {'+
                    'this.appendDummyInput()'+
                        '.appendField("Effect Shoot");'+
                    'this.appendStatementInput("SceneObject1")'+
                        '.setCheck("BlockLibs")'+
                        '.appendField("shootObject");'+
                    'this.appendStatementInput("SceneObject1_1")'+
                        '.setCheck("Nodes")'+
                        '.appendField("fromObject");'+
                    'this.appendStatementInput("SceneObject2")'+
                        '.setCheck("EffectLibs")'+
                        '.appendField("shootFrom");'+
                    'this.appendDummyInput()'+
                        '.appendField("shootDirection: x =")'+
                        '.appendField(new Blockly.FieldNumber(0), "es_x")'+
                        '.appendField(", y =")'+
                        '.appendField(new Blockly.FieldNumber(0), "es_y")'+
                        '.appendField(", z =")'+
                        '.appendField(new Blockly.FieldNumber(0), "es_z");'+
                    'this.appendDummyInput()'+
                        '.appendField("shootPower")'+
                        '.appendField(new Blockly.FieldNumber(0), "es_p");'+
                    'this.setPreviousStatement(true, "Effects");'+
                    'this.setNextStatement(true, "Effects");'+
                    'this.setColour(110);'+
                    'this.setTooltip("Create and shoot an object in target power. The shootDirection is a local Vector related to the shootFrom object\'s axis.");'+
                  '}};';
  var ecreate = 'Blockly.Blocks["effect-create"] = {'+
                  'init: function() {'+
                    'this.appendDummyInput()'+
                        '.appendField("Effect Create");'+
                    'this.appendStatementInput("SceneObject1")'+
                        '.setCheck("BlockLibs")'+
                        '.appendField("createObject");'+
                    'this.appendStatementInput("SceneObject1_1")'+
                        '.setCheck("Nodes")'+
                        '.appendField("fromObject");'+
                    'this.appendStatementInput("SceneObject2")'+
                        '.setCheck("EffectLibs")'+
                        '.appendField("createAtObjectPosition");'+
                    'this.appendDummyInput()'+
                        '.appendField("createAtWorldPosition: x =")'+
                        '.appendField(new Blockly.FieldNumber(0), "ec_x")'+
                        '.appendField(", y =")'+
                        '.appendField(new Blockly.FieldNumber(0), "ec_y")'+
                        '.appendField(", z =")'+
                        '.appendField(new Blockly.FieldNumber(0), "ec_z");'+
                    'this.setPreviousStatement(true, "Effects");'+
                    'this.setNextStatement(true, "Effects");'+
                    'this.setColour(110);'+
                    'this.setTooltip("Create an Object at target location. If createAtObjectPosition is set, object will create at the object position; if createAtObjectPosition is blank or not found, will use createAtWorldPositon\'s position.");'+
                  '}};';
  var eaudio = 'Blockly.Blocks["effect-play-audio"] = {'+
                  'init: function() {'+
                    'this.appendDummyInput()'+
                        '.appendField("Audio");'+
                    'this.appendStatementInput("playAudio")'+
                        '.setCheck(null)'+
                        '.appendField("playAudio");'+
                    'this.setPreviousStatement(true, "Effects");'+
                    'this.setNextStatement(true, "Effects");'+
                    'this.setColour(110);'+
                    'this.setTooltip("effect audio");'+
                  '}};';
  var effect = '';
  effect = eval(eshoot + ecreate + eaudio);
  return "effect block done";
}


event_insert = function () {
  var eventarray = ['left-hand-circle', 'left-hand-up', 'right-hand-circle', 'right-hand-up'];
  var event_block = '', event_hand = '';
  for (var i = 0; i < eventarray.length; i++) {
    event_block += '<block type="'+eventarray[i]+'"></block>';
    event_hand = 'Blockly.Blocks["'+eventarray[i]+'"] = {'+
                    'init: function() {'+
                      'this.appendDummyInput()'+
                          '.appendField("'+eventarray[i]+'");'+
                      'this.setPreviousStatement(true, "Dos");'+
                      // 'this.setOutput(true, "Dos");'+
                      'this.setColour(160);'+
                    '}};';
    eval(event_hand);
  }
  document.write(event_block);
  return "event block done";
}

node_insert = function () {
  var nodelist = '{"message_type":"node_list","items":[{"node_name":"head"},{"node_name":"head_END"},{"node_name":"neck"},{"node_name":"hips"},{"node_name":"spine"},{"node_name":"spine1"},{"node_name":"spine2"},{"node_name":"spine3"},{"node_name":"leftShoulder"},{"node_name":"leftArm"},{"node_name":"leftForeArm"},{"node_name":"leftHand"},{"node_name":"leftHand_END"},{"node_name":"rightShoulder"},{"node_name":"rightArm"},{"node_name":"rightForeArm"},{"node_name":"rightHand"},{"node_name":"rightHand_END"},{"node_name":"leftUpLeg"},{"node_name":"leftLeg"},{"node_name":"leftFoot"},{"node_name":"leftToeBase"},{"node_name":"leftToes_END"},{"node_name":"rightUpLeg"},{"node_name":"rightLeg"},{"node_name":"rightFoot"},{"node_name":"rightToeBase"},{"node_name":"rightToes_END"}]}';
  n = JSON.parse(nodelist);
  var node_items_length = n["items"].length;
  var b = "";
  for (var i = 0; i < node_items_length; i++) {
    nodename = n.items[i]["node_name"];

    b +='<block type="'+nodename+'"></block>';

    // document.getElementById("bg").innerHTML = b;
      // tmp.push(backgroundname);
      var event_hand = '';
      event_hand += eval('Blockly.Blocks["'+nodename+'"] = {'+
                      'init: function() {'+
                        'this.appendDummyInput()'+
                            '.appendField("'+nodename+'");'+
                        'this.setPreviousStatement(true, "Nodes");'+
                        'this.setColour(160);'+
                      '}};');

  }
  document.write(b);
  return "node block done";
}


preset_insert = function () {
  var mes_pr = '{"message_type":"preset_object_list","items":[{"object_name":"GoldBall"},{"object_name":"SimpleCube"},{"object_name":"TreeObject"},{"object_name":"Explosion"},{"object_name":"Rainbow"},{"object_name":"Flame"},{"object_name":"Fish-1"},{"object_name":"Fish-2"}, {"object_name":"WhiteSmoke"}]}';
  // var me_s = me.split('\n');
  // var mes_pr = me_s[0];
  // console.log(mes_pr);
  mes_pr = JSON.parse(mes_pr);
  var pre_objs_length = mes_pr.items.length;
  var p = "";
  for (var i = 0; i < pre_objs_length; i++) {
    presetname = mes_pr.items[i]["object_name"];
    p += '<block type="'+presetname+'"></block>';

   //  document.getElementById("pr").innerHTML = p;

    var pp = '';
    pp+= eval('Blockly.Blocks["'+presetname+'"] = {'+
        'init: function() {'+
        // 'this.appendValueInput("Field").setCheck(null).appendField("'+ effectsArray[i] +'");'+
          'this.appendDummyInput()'+
          '.appendField("'+ presetname +'");'+
          'this.appendDummyInput().appendField("  position(x=")'+
          '.appendField(new Blockly.FieldNumber("0.0"), "position_x")'+
          '.appendField(", y=")'+
          '.appendField(new Blockly.FieldNumber("0.0"), "position_y")'+
          '.appendField(", z=")'+
          '.appendField(new Blockly.FieldNumber("0.0"), "position_z")'+
          '.appendField(")");'+
          'this.appendDummyInput().appendField("  initStatus = ")'+
          '.appendField(new Blockly.FieldDropdown([["Visible","true"], ["Invisible","false"]]), "initStatus");'+
          'this.setPreviousStatement(true, null);'+
          'this.setNextStatement(true, null);'+
          'this.setColour(200);'+
          'this.setTooltip("Preset Object");'+
        '}};');
  }
  document.write(p);
  return "preset block done";
}



audio_insert = function () {
  var mes_pr = '{"message-type":"audio-list", "items":[ {"audio-name":"1_Bike_Rides"}, {"audio-name":"2_Fortunate_Son"}, {"audio-name":"Magic_Chime"}, {"audio-name":"bubble"}, {"audio-name":"chicken-sound"}, {"audio-name":"piano-music"} ]}';
  // var me_s = me.split('\n');
  // var mes_pr = me_s[1];
  mes_pr = JSON.parse(mes_pr);
  var pre_objs_length = mes_pr.items.length;
  var p = "";
  for (var i = 0; i < pre_objs_length; i++) {
    presetname = mes_pr.items[i]["audio-name"];
    p += '<block type="'+presetname+'"></block>';
    // console.log(p);
   //  document.getElementById("pr").innerHTML = p;

    var pp = '';
    pp+= eval('Blockly.Blocks["'+presetname+'"] = {'+
        'init: function() {'+
        // 'this.appendValueInput("Field").setCheck(null).appendField("'+ effectsArray[i] +'");'+
          'this.appendDummyInput().appendField("'+ presetname +'");'+
          'this.setPreviousStatement(true, "Audio");'+
          'this.setNextStatement(true, "Audio");'+
          'this.setColour(300);'+
          'this.setTooltip("Audio Object");'+
        '}};');
  }
  document.write(p);
  return "audio block done";
}
