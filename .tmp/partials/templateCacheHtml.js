angular.module("angularChat").run(["$templateCache", function($templateCache) {$templateCache.put("app/account/basic.info.tmpl.html","<md-content layout-padding=\"\" layout=\"column\"><div layout=\"\"><button ng-if=\"user.imageUrl!=\'\' && user.imageUrl\" class=\"md-icon-button md-button ng-scope md-default-theme\" flex=\"10\" ng-click=\"user.imageUrl=\'http://robohash.org/\'+user.username;\"><img ng-src=\"{{user.imageUrl}}\" class=\"md-avatar message-avatar ng-scope\" style=\"height: 50px; background-color: white;\"><md-tooltip md-direction=\"bottom\">Crie sua imagem de perfil</md-tooltip></button><md-button ng-if=\"user.username && (user.imageUrl==\'\' || !user.imageUrl) && user.username!=\'\'\" class=\"md-raised\" flex=\"\" ng-click=\"user.imageUrl=\'http://robohash.org/\'+user.username;\">Generate Avatar</md-button><div class=\"md-ripple-container\"></div><md-input-container flex=\"\"><label>Link da Imagem</label> <input ng-model=\"user.imageUrl\" name=\"imageUrl\"></md-input-container></div></md-content><md-content layout-padding=\"\"><div layout=\"\"><md-input-container flex=\"\"><label>Nome</label> <input ng-model=\"user.firstName\" required=\"\" name=\"firstName\"></md-input-container><md-input-container flex=\"\"><label>Sobrenome</label> <input ng-model=\"user.lastName\" required=\"\" name=\"lastName\"></md-input-container></div></md-content><md-content layout-padding=\"\" layout=\"row\" layout-sm=\"column\"><md-input-container flex=\"\"><label>Apelido</label> <input ng-model=\"user.username\" required=\"\" name=\"username\"></md-input-container><md-input-container flex=\"\"><label>Senha</label> <input ng-model=\"user.password\" type=\"password\" required=\"\" name=\"password\"></md-input-container></md-content>");
$templateCache.put("app/account/profile.dialog.html","<md-dialog aria-label=\"Login\"><form name=\"loginForm\"><md-toolbar><div class=\"md-toolbar-tools\"><h2>Perfil</h2><span flex=\"\"></span><md-button class=\"md-icon-button\"><md-icon md-svg-src=\"img/icons/ic_close_24px.svg\" aria-label=\"Fechar\" ng-click=\"profileDialogCtrl.cancel()\"></md-icon></md-button></div></md-toolbar><md-dialog-content><basic-info user=\"profileDialogCtrl.user\"></basic-info></md-dialog-content><md-dialog-actions layout=\"column\" layout-align=\"center\"><md-button layout=\"row\" layout-align=\"center center\" ng-click=\"profileDialogCtrl.save()\">Salvar</md-button></md-dialog-actions></form></md-dialog>");
$templateCache.put("app/login/login.html","<div class=\"login-frame\" ui-view=\"\" flex=\"\" layout=\"row\"><div layout=\"row\" flex=\"\" layout-padding=\"\" layout-fill=\"\" layout-align=\"center center\" class=\"ng-scope\"><div flex=\"40\" flex-lg=\"50\" flex-md=\"70\" flex-sm=\"100\"><md-card class=\"md-cyan-theme\"><md-toolbar class=\"md-cyan-theme\" layout-padding=\"\"><div layout=\"column\" layout-align=\"center\" class=\"padding-20 text-center\"><h1 layout=\"row\" layout-align=\"center center\" class=\"md-headline ng-scope\" translate=\"\">Login</h1></div></md-toolbar><md-content class=\"md-padding md-cyan-theme\"><form name=\"login\" layout=\"column\"><md-input-container><label>Apelido</label> <input name=\"username\" ng-model=\"loginCtrl.user.username\" type=\"text\" required=\"\"></md-input-container><md-input-container><label>Senha</label> <input ng-model=\"loginCtrl.user.password\" type=\"password\" required=\"\"></md-input-container><md-dialog-actions layout=\"column\" layout-align=\"center\"><md-button class=\"md-raised md-primary\" layout=\"row\" layout-align=\"center center\" ng-disabled=\"login.$invalid==true\" ng-click=\"loginCtrl.login()\">Login</md-button><a class=\"md-primary md-button md-cyan-theme\" ui-sref=\"registration\" aria-label=\"Don\'t have an account? Create one now\">Não tem cadastro? Crie uma conta agora!</a></md-dialog-actions></form></md-content></md-card></div></div></div>");
$templateCache.put("app/main/main.html","<main-menu ng-if=\"$root.loggedIn\"></main-menu><left-nav ng-if=\"$root.loggedIn\"></left-nav><fab ng-if=\"$root.loggedIn\"></fab>");
$templateCache.put("app/menu/leftnav.html","<md-sidenav class=\"md-sidenav-left md-whiteframe-z2\" md-component-id=\"left\"><md-toolbar class=\"md-theme-light\"><h1 class=\"md-toolbar-tools\">Menu</h1></md-toolbar><md-content layout-padding=\"\" class=\"cover\"><div layout=\"column\" layout-align=\"center\"><avatar class=\"avatar\" user=\"leftnavCtrl.user\"></avatar><h3 class=\"fullname\" layout=\"row\" layout-align=\"center center\">{{ leftnavCtrl.user | fullname }}</h3><small class=\"username\" layout=\"row\" layout-align=\"center center\">@{{ leftnavCtrl.user.username}}</small></div></md-content><md-content><md-dialog-actions layout=\"column\"><md-button profile-button=\"\" class=\"md-accent\" layout=\"row\">Perfil</md-button><md-button logout-button=\"\" class=\"md-accent\" layout=\"row\">Sair</md-button><md-button ng-click=\"leftnavCtrl.close()\" layout=\"row\">Fechar</md-button></md-dialog-actions></md-content></md-sidenav>");
$templateCache.put("app/menu/menu.html","<md-toolbar><div class=\"md-toolbar-tools\"><a href=\"\"><img src=\"/img/message-logo-icon.png\" style=\"width:50px; height:50px;\" ng-click=\"menuCtrl.toggleLeft()\" ng-if=\"$root.loggedIn\"></a><h2><span>CSC MENSSEGER</span></h2><span flex=\"\"></span><md-button room-list-opener=\"\" ng-if=\"$root.loggedIn\">Salas</md-button><md-button login-button=\"\" ng-if=\"!$root.loggedIn\">Login</md-button><registration-button ng-if=\"!$root.loggedIn\"></registration-button><md-button profile-button=\"\" aria-label=\"More\" ng-if=\"$root.loggedIn\"><img ng-src=\"{{ menuCtrl.user.imageUrl }}\" style=\"border-radius: 50%; margin-top: 10px; height: 50px; background-color: white;\"></md-button></div></md-toolbar>");
$templateCache.put("app/message/message.item.tmpl.html","<md-list-item class=\"contact-item md-2-line selected\" ng-if=\"messageCtrl.author\"><avatar user=\"messageCtrl.author\" class=\"md-avatar message-avatar\"></avatar><div class=\"md-list-item-text compact\"><p style=\"text-align: right;\"><small><strong>{{messageCtrl.author.username | username }}</strong>, {{ messageCtrl.message | createdDate }}</small></p><div class=\"message-content\"><ng-embed embed-data=\"messageCtrl.message.text\" embed-options=\"$root.embedOptions\"></ng-embed></div></div></md-list-item>");
$templateCache.put("app/registration/registration.html","<div class=\"registration-frame\" ui-view=\"\" flex=\"\" layout=\"row\"><div layout=\"row\" flex=\"\" layout-padding=\"\" layout-fill=\"\" layout-align=\"center center\" class=\"ng-scope\"><div flex=\"40\" flex-lg=\"50\" flex-md=\"70\" flex-sm=\"100\"><md-card class=\"md-cyan-theme\"><md-toolbar class=\"md-cyan-theme\" layout-padding=\"\"><div layout=\"column\" layout-align=\"center\" class=\"padding-20 text-center\"><img ng-src=\"img/logo.png\"><h1 layout=\"row\" layout-align=\"center center\" class=\"md-headline ng-scope\" translate=\"\">Cadastro</h1></div></md-toolbar><md-content class=\"md-padding md-cyan-theme\"><form name=\"registration\"><basic-info user=\"registrationCtrl.user\"></basic-info><md-dialog-actions layout=\"column\" layout-align=\"center\"><md-button class=\"md-raised md-primary\" layout=\"row\" layout-align=\"center center\" ng-disabled=\"registration.$invalid\" ng-click=\"registrationCtrl.register()\">Registrar</md-button><a class=\"md-primary md-button md-cyan-theme\" ui-sref=\"login\" aria-label=\"Already registered? Login now\">Já Cadastrado? Faça o login agora</a></md-dialog-actions></form></md-content></md-card></div></div></div>");
$templateCache.put("app/room/create.room.dialog.tmpl.html","<md-dialog aria-label=\"New Room\"><form name=\"createRoomForm\"><md-toolbar><div class=\"md-toolbar-tools\"><h2>Criar Sala</h2><span flex=\"\"></span><md-button class=\"md-icon-button\" ng-click=\"createRoomCtrl.cancel()\"><md-icon md-svg-src=\"img/icons/ic_close_24px.svg\" aria-label=\"Fechar\"></md-icon></md-button></div></md-toolbar><md-dialog-content><md-content layout-padding=\"\"><div layout=\"\" layout-sm=\"column\"><md-input-container flex=\"\"><label>Nome</label> <input ng-enter=\"createRoomCtrl.create()\" ng-model=\"createRoomCtrl.newRoom.name\" required=\"\"></md-input-container></div></md-content></md-dialog-content><md-dialog-actions layout=\"column\" layout-align=\"center\"><md-button class=\"md-primary md-raised\" layout=\"row\" layout-align=\"center center\" ng-click=\"createRoomCtrl.create()\">Salvar</md-button></md-dialog-actions></form></md-dialog>");
$templateCache.put("app/room/create.room.fab.tmpl.html","<md-fab-speed-dial md-direction=\"left\" ng-class=\"\'md-scale\'\" style=\"position: fixed;right:10px;bottom: 10px; z-index: 10;\"><md-fab-trigger><md-button aria-label=\"menu\" class=\"md-fab md-warn\" ng-click=\"fabCtrl.createRoomDialog()\"><md-icon md-svg-icon=\"core:add\"></md-icon><md-tooltip md-direction=\"left\">Criar Sala</md-tooltip></md-button></md-fab-trigger></md-fab-speed-dial>");
$templateCache.put("app/room/room.item.html","<div layout=\"row\" layout-wrap=\"\"><md-content layout=\"column\" flex=\"80\" flex-sm=\"100\"><md-content style=\"height: 60vh;\">{{roomItemCtrl.users2}}<md-list scroll=\"roomItemCtrl.messages\"><md-subheader class=\"md-info\">Messages in room {{ roomItemCtrl.room.name }}</md-subheader><message ng-repeat=\"message in roomItemCtrl.messages track by message._id\" message=\"message\" author=\"roomItemCtrl.allusers[message.authorId]\" ng-class=\"{ \'repeated-author\' : $index>0 && message.authorId == roomItemCtrl.messages[$index-1].authorId}\"></message></md-list></md-content><md-content layout-padding=\"\" layout=\"column\"><md-input-container class=\"md-accent\"><label>Nova Mensagem</label> <input ng-enter=\"roomItemCtrl.createMessage()\" ng-model=\"roomItemCtrl.newMessage\" md-maxlength=\"350\"></md-input-container></md-content></md-content><md-content class=\"side-nav room-users\" hide-sm=\"\" layout=\"column\" flex=\"18\"><md-list layout-fill=\"\"><md-subheader class=\"md-accent\">Usuários Online</md-subheader><md-list-item class=\"md-2-line contact-item selected\" ng-repeat=\"(index, contact) in roomItemCtrl.users track by contact._id\" ng-show=\"contact.username\"><avatar user=\"contact\"></avatar><div class=\"md-list-item-text compact\"><h3>{{contact | fullname }}</h3><p>@{{contact.username}}</p></div><md-divider></md-divider></md-list-item></md-list></md-content></div>");
$templateCache.put("app/room/room.list.tmpl.html","<md-bottom-sheet class=\"md-list md-has-header\"><md-subheader ng-if=\"roomListCtrl.rooms.length == 0\">Nenhuma sala disponível <small>Crie uma sala!</small></md-subheader><md-subheader ng-if=\"roomListCtrl.rooms.length > 0\">Salas disponíveis <small>Clique para abrir uma sala.</small></md-subheader><md-content style=\"max-height: 200px;\"><md-chips ng-model=\"roomListCtrl.rooms\" readonly=\"true\"><md-chip-template><strong ng-click=\"roomListCtrl.openRoom($index,$chip)\">{{$chip.name}}</strong></md-chip-template></md-chips></md-content></md-bottom-sheet>");
$templateCache.put("app/room/room.tabs.tmpl.html","<md-content flex=\"\" ng-if=\"roomsCtrl.rooms.length > 0\"><md-subheader>Salas abertas agora</md-subheader><md-tabs md-dynamic-height=\"\" md-selected=\"roomsCtrl.selectedIndex\" md-border-bottom=\"\"><md-tab ng-repeat=\"room in roomsCtrl.rooms\"><md-tab-label>{{room.name}} <a ng-click=\"roomsCtrl.removeRoom($index,room)\"><md-icon md-svg-icon=\"navigation:close\"></md-icon></a></md-tab-label><md-tab-body><div ng-if=\"roomsCtrl.selectedIndex === $index\" ui-view=\"\" flex=\"\"></div></md-tab-body></md-tab></md-tabs></md-content>");
$templateCache.put("app/user/anonymous.avatar.directive.tmpl.html","<img src=\"img/anonymous.png\" class=\"md-avatar\" alt=\"{{user.name}}\">");
$templateCache.put("app/user/filled.avatar.directive.tmpl.html","<img ng-src=\"{{ user.imageUrl }}\" class=\"md-avatar\" alt=\"{{user.name}}\" ng-if=\"user.imageUrl\">");}]);