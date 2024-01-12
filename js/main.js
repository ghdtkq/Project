$(document).ready(function(){
    $('.nv1 div .main1,.sub').mouseover(function(){ //Shopping �� ���콺 ����
        $('.sub').css('display','block');//������ ��ǰ ���
    });
    
    $('.nv1 div .main1,.sub').mouseout(function(){
        $('.sub').css('display',''); //������ ��ǰ ��� �ȵǰ� ����
    });
    
    $('.a1,.sub1').mouseover(function(){ //������ ��ǰ�� ���콺 ����
        $('.sub1').css('display','block');//������ �׸��� ������ ����
    });
    
    $('.a1,.sub1').mouseout(function(){//������ �׸��� �ȳ����� ����
        $('.sub1').css('display','');
    });
});

function toggleSubMenu(subMenuId) {
    var subMenu = document.getElementById(subMenuId);
    if (subMenu.style.display === 'none') {
        subMenu.style.display = 'block';
    } else {
        subMenu.style.display = 'none';
    }
}