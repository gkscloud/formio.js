export default {
  form: `
<table class="ui table striped celled">
  <thead>
    <tr>
      <th></th>
      {% component.values.forEach(function(value) { %}
      <th style="text-align: center;">{{t(value.label)}}</th>
      {% }) %}
    </tr>
  </thead>
  <tbody>
    {% component.questions.forEach(function(question) { %}
    <tr>
      <td>{{t(question.label)}}</td>
      {% component.values.forEach(function(value) { %}
      <td style="text-align: center;">
        <input type="radio" name="data[{{key}}][{{question.value}}]" value="{{value.value}}" id="{{key}}-{{question.value}}-{{value.value}}" ref="input">
      </td>
      {% }) %}
    </tr>
    {% }) %}
  </tbody>
</table>
`,
};
