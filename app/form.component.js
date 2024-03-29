"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var employee_1 = require('./employee');
var employee_service_1 = require('./employee.service');
var EmployeeComponent = (function () {
    function EmployeeComponent(employeeService) {
        this.employeeService = employeeService;
        this.model = new employee_1.Employee('Jean', '30', 'FreeTime');
        this.submitted = false;
    }
    EmployeeComponent.prototype.addEmployee = function (model) {
        var _this = this;
        if (!model)
            return;
        this.employeeService.addEmployee(model)
            .subscribe(function (employee) { return _this.employees.push(employee); }, function (error) { return _this.errorMessage = error; });
    };
    EmployeeComponent.prototype.onSubmit = function (model) {
        this.submitted = true;
        this.addEmployee(model);
    };
    Object.defineProperty(EmployeeComponent.prototype, "diagnostic", {
        get: function () {
            return JSON.stringify(this.model);
        },
        enumerable: true,
        configurable: true
    });
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'employee-form',
            templateUrl: 'app/templates/employee-form.component.html',
            providers: [employee_service_1.EmployeeService]
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=form.component.js.map