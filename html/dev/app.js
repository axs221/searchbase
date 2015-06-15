if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />
var angular2_1 = require('angular2/angular2');
var $ = require('jquery');
var SampleApp = (function () {
    function SampleApp() {
    }
    SampleApp.prototype.search = function (terms) {
        this.searchTerm = terms;
        this.detailFrame = 'http://searchbase.shawnaxsom.com/search?q=' + terms;
    };
    SampleApp.prototype.saveNote = function (note) {
        var mySearchData = {
            "key": "f",
            "value": "g"
        };
        $.ajax({
            url: "http://searchbase.shawnaxsom.com/api",
            type: "POST",
            crossDomain: true,
            data: mySearchData,
            dataType: "json",
            success: function (response) {
                var resp = JSON.parse(response);
                alert(resp.status);
            },
            error: function (xhr, status) {
                alert("error");
            }
        });
    };
    SampleApp.prototype.getPreviousSearches = function () {
    };
    SampleApp = __decorate([
        angular2_1.Component({
            selector: 'home',
        }),
        angular2_1.View({
            templateUrl: './templates/home.html',
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], SampleApp);
    return SampleApp;
})();
angular2_1.bootstrap(SampleApp);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6WyJTYW1wbGVBcHAiLCJTYW1wbGVBcHAuY29uc3RydWN0b3IiLCJTYW1wbGVBcHAuc2VhcmNoIiwiU2FtcGxlQXBwLnNhdmVOb3RlIiwiU2FtcGxlQXBwLmdldFByZXZpb3VzU2VhcmNoZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFFQSwwREFGMEQ7QUFDMUQsc0RBQXNEO0FBQ3RELHlCQUFnRCxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3BFLElBQU8sQ0FBQyxXQUFXLFFBQVEsQ0FBQyxDQUFDO0FBRTdCO0lBQUFBO0lBZ0RBQyxDQUFDQTtJQW5DQ0QsMEJBQU1BLEdBQU5BLFVBQU9BLEtBQUtBO1FBQ1ZFLElBQUlBLENBQUNBLFVBQVVBLEdBQUdBLEtBQUtBLENBQUNBO1FBQ3hCQSxJQUFJQSxDQUFDQSxXQUFXQSxHQUFHQSw0Q0FBNENBLEdBQUdBLEtBQUtBLENBQUNBO0lBQzFFQSxDQUFDQTtJQUVERiw0QkFBUUEsR0FBUkEsVUFBU0EsSUFBSUE7UUFDWEcsSUFBSUEsWUFBWUEsR0FBR0E7WUFDakJBLEtBQUtBLEVBQUVBLEdBQUdBO1lBQ1ZBLE9BQU9BLEVBQUVBLEdBQUdBO1NBQ2JBLENBQUNBO1FBQ0ZBLENBQUNBLENBQUNBLElBQUlBLENBQUNBO1lBQ0NBLEdBQUdBLEVBQUVBLHNDQUFzQ0E7WUFDM0NBLElBQUlBLEVBQUVBLE1BQU1BO1lBQ1pBLFdBQVdBLEVBQUVBLElBQUlBO1lBQ2pCQSxJQUFJQSxFQUFFQSxZQUFZQTtZQUNsQkEsUUFBUUEsRUFBRUEsTUFBTUE7WUFDaEJBLE9BQU9BLEVBQUVBLFVBQVVBLFFBQVFBO2dCQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUMvQixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZCLENBQUM7WUFDREEsS0FBS0EsRUFBRUEsVUFBVUEsR0FBR0EsRUFBRUEsTUFBTUE7Z0JBQ3hCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuQixDQUFDO1NBQ0pBLENBQUNBLENBQUNBO0lBQ1RBLENBQUNBO0lBRURILHVDQUFtQkEsR0FBbkJBO0lBUUFJLENBQUNBO0lBL0NISjtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsTUFBTUE7U0FDakJBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0pBLFdBQVdBLEVBQUVBLHVCQUF1QkE7WUFDcENBLFVBQVVBLEVBQUVBLENBQUNBLGdCQUFLQSxDQUFDQTtTQUNwQkEsQ0FBQ0E7O2tCQTBDREE7SUFBREEsZ0JBQUNBO0FBQURBLENBaERBLEFBZ0RDQSxJQUFBO0FBRUQsb0JBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9hbmd1bGFyMi9hbmd1bGFyMi5kLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL2pxdWVyeS9qcXVlcnkuZC50c1wiIC8+XG5pbXBvcnQge0NvbXBvbmVudCwgVmlldywgYm9vdHN0cmFwLCBOZ0Zvcn0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaG9tZScsXG59KVxuQFZpZXcoe1xuICB0ZW1wbGF0ZVVybDogJy4vdGVtcGxhdGVzL2hvbWUuaHRtbCcsXG4gIGRpcmVjdGl2ZXM6IFtOZ0Zvcl1cbn0pXG5cbmNsYXNzIFNhbXBsZUFwcCB7XG4gIGRldGFpbEZyYW1lOiBzdHJpbmc7XG4gIG5vdGU6IHN0cmluZztcbiAgc2VhcmNoVGVybTogc3RyaW5nO1xuXG4gIHNlYXJjaCh0ZXJtcykge1xuICAgIHRoaXMuc2VhcmNoVGVybSA9IHRlcm1zO1xuICAgIHRoaXMuZGV0YWlsRnJhbWUgPSAnaHR0cDovL3NlYXJjaGJhc2Uuc2hhd25heHNvbS5jb20vc2VhcmNoP3E9JyArIHRlcm1zO1xuICB9XG5cbiAgc2F2ZU5vdGUobm90ZSkge1xuICAgIHZhciBteVNlYXJjaERhdGEgPSB7XG4gICAgICBcImtleVwiOiBcImZcIixcbiAgICAgIFwidmFsdWVcIjogXCJnXCJcbiAgICB9O1xuICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL3NlYXJjaGJhc2Uuc2hhd25heHNvbS5jb20vYXBpXCIsXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGNyb3NzRG9tYWluOiB0cnVlLFxuICAgICAgICAgICAgZGF0YTogbXlTZWFyY2hEYXRhLFxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3AgPSBKU09OLnBhcnNlKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgIGFsZXJ0KHJlc3Auc3RhdHVzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJlcnJvclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gIH1cblxuICBnZXRQcmV2aW91c1NlYXJjaGVzKCkge1xuICAvLyAgICBmZXRjaCgnaHR0cHM6Ly9ncmF0aXBheS5jb20vfkdyYXRpcGF5L3B1YmxpYy5qc29uJywge21vZGU6ICdjb3JzJ30pICBcbiAgLy8gICAgICAudGhlbihmdW5jdGlvbih0ZXh0KSB7ICBcbiAgLy8gICAgICAgIGFsZXJ0KCdSZXF1ZXN0IHN1Y2Nlc3NmdWwnLCB0ZXh0KTsgIFxuICAvLyAgICAgIH0pICBcbiAgLy8gICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHsgIFxuICAvLyAgICAgICAgbG9nKCdSZXF1ZXN0IGZhaWxlZCcsIGVycm9yKSAgXG4gIC8vICAgICAgfSk7XG4gIH1cbn1cblxuYm9vdHN0cmFwKFNhbXBsZUFwcCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=