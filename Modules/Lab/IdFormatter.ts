namespace LBYS.Lab {
    @Serenity.Decorators.registerFormatter()
    export class IdFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var text = Q.htmlEncode(ctx.value);

            return "<span class='IdLabel bg-blue 'style=' margin-top: -3px;'>" + text + '</span>';

        }
    }
}