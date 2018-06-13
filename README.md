# EzTimer

## synchronisable JavaScript count down timer

This package is a simple JavaScript count-down timer that can receive updates and can make a predefined call when the time runs out (see [Call](#call)).

## usage

Sample usage is show in [EzTimer sample](https://github.com/blondie101010/eztimer/blob/master/eztimer-test.html).

The class is simply instanciated as: `var myEzTimer = new EzTimer("myTimer", 15, 5);`  which gives a 15 second timer with a warning at 5 seconds.

## synchronization / update

This module allows synchronization with a remote system by doing HTTP(S) requests to it and calling `$myEzTimer.update(seconds)` with the relevant `seconds` parameter.

This enables you to ensure that the time flow is really controlled in the back-end, typically kept in a database table or session information.

## call

You can define a function or method to call once the time runs out such as what is shown in the example to produce an `alert()`.  This is done by defining the EzTimer's `call` method.
